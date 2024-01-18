import React, { createContext, useContext, useEffect, useState } from 'react'; // importando  o react context
import { getDocs, getFirestore, collection, addDoc } from "firebase/firestore"
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../serices/FirebaseConfig';
import { useProdutsContext } from './ProdutsContext';

const AuthContext = createContext(); // criando o context
const provider = new GoogleAuthProvider();


export const AuthProvider = ({ children }) => { // exportando a funçao que farar o provider , passando como paramentro children
 
  const { getProduts, setProduts} = useProdutsContext()

  const db_app = getFirestore(app)
  const userCollectionRef = collection(db_app, "Users")

  const [User, setUser] = useState([])
  const [auths, setAuth] = useState(JSON.parse(localStorage.getItem("User")))
  const [toogle, setToogle] = useState("-310px")

  const getUsers = async () => {
    const response = await getDocs(userCollectionRef)
    const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setUser(result)
    // if(!auths){
    //   setReload_Localstorage()
    // }
  }

 
  const signInGoogle = () => {
    getUsers()
    const auth = getAuth(app);

    if(User === null){
        
      auth.signInWithRedirect(provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            createUser(user.providerData[0])
            getUsers()
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });

    }else{
      getProduts()
      console.log(User)
      signInWithPopup(auth, provider)
      .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

          let checkedUser = false
          if(User){
            setAuth(null)
            getUsers()
            User.map((e)=> {
              if(e.email === user.providerData[0].email && e.token === user.providerData[0].uid){
                console.log("usuario ja exite")
                setAuth(e.adm)
                localStorage.setItem("User", JSON.stringify(e.adm))
                localStorage.setItem("photo", JSON.stringify(user.providerData[0].photoURL))
                localStorage.setItem("UserName", JSON.stringify(user.providerData[0].displayName))
                console.log(User[0].adm)
                checkedUser = true
              }
            })
          }
          if(!checkedUser){
            createUser(user.providerData[0])
            console.log("new usuario")
            setAuth(false)
            localStorage.setItem("User", JSON.stringify(false))
            localStorage.setItem("photo", JSON.stringify(user.providerData[0].photoURL))
            localStorage.setItem("UserName", JSON.stringify(user.providerData[0].displayName))
            checkedUser = false
         
          }
          
          getUsers()
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }
  }
  
  async function createUser(user){
    
    await addDoc(userCollectionRef, {
      displayName:user.displayName,
      email:user.email,
      photo:user.photoURL,
      token:user.uid,
      adm: User === null ? true : false,
    })
    setAuth(User === null ? true : false)
    localStorage.setItem("User", JSON.stringify(User === null ? true : false))
    getUsers()
  }


    useEffect(()=>{
       getUsers()
    },[])



    // logica do time para expirar a pagina quando o usuario passa um determinado tempo sem interagir
    // assim deslogando da pagina inicial voltando para pagina de login
    let time;

    window.addEventListener("mousemove", ()=>{
      console.log("mouse")
      const db_storage = JSON.parse(localStorage.getItem("User"))
      setAuth(db_storage)
      if(db_storage === true || db_storage === false){
       
        reloadTime()
      }
  
    })

    const reloadTime = ()=>{
      if(auths === true|| auths === false){
         clearTimeout(time)
         time = setTimeout(()=>{
           localStorage.clear()
           setAuth(null)
         },(60 * 1000) * 20)
      }

    }

    const hendleLogin = () => {
     
         localStorage.clear()
         clearTimeout(time)
         setAuth(null)
         setProduts()
         getUsers()
     
    }

    const hendleToogle = (toogle) => {
      setToogle(toogle)
    }

    const [cart, setCart] = useState("-430px")
    const hendleCart = (cart_toogle) => {
      setCart(cart_toogle)
    }

    return ( // usando e retornando o Appcontext.provider e passando o children, passando valores como props  pelo value 
      <AuthContext.Provider value={{ 
        User, 
        auths, 
        hendleLogin, 
        hendleToogle, 
        toogle,
        signInGoogle,
        hendleCart,
        cart,
        setCart,

        }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

