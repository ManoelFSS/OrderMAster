import React, { createContext, useContext, useEffect, useState } from 'react'; // importando  o react context
import { getDocs, getFirestore, collection } from "firebase/firestore"
import { app } from './FireaseConfig';

const AuthContext = createContext(); // criando o context

export const AuthProvider = ({ children }) => { // exportando a funçao que farar o provider , passando como paramentro children
    
    const db_app = getFirestore(app)
    const userCollectionRef = collection(db_app, "Users")

    const getUsers = async () => {
      const response = await getDocs(userCollectionRef)
      const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setUser(result)
      console.log(result)
    }

    
    const [User, setUser] = useState([])
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("User")))
    const [toogle, setToogle] = useState("0px")


    const hendleUser = () =>{
        const db_storage = JSON.parse(localStorage.getItem("User"))
        setAuth(db_storage)
        console.log(db_storage)
        
    }
 

    useEffect(()=>{
       getUsers()
    },[])



    //logica do time para expirar a pagina quando o usuario passa um determinado tempo sem interagir
    // assim deslogando da pagina inicial voltando para pagina de login
    let time;


    window.addEventListener("mousemove", ()=>{
      const db_storage = JSON.parse(localStorage.getItem("User"))
      setAuth(db_storage)
      if(db_storage === true || db_storage === false){
        
        reloadTime()
      }
  
    })

    const reloadTime = ()=>{
      if(auth === true|| auth === false){
         clearTimeout(time)
         time = setTimeout(()=>{
            const db_setstorage = localStorage.setItem("User", JSON.stringify(null))
            setAuth(db_setstorage)
            
         },240000)
      }

    }

    const hendleLogin = () => {
      clearTimeout(time)
      const db_setstorage = localStorage.setItem("User", JSON.stringify(null))
      setAuth(db_setstorage)
    }

    const hendleToogle = (toogle) => {
      setToogle(toogle)
    }

    return ( // usando e retornando o Appcontext.provider e passando o children, passando valores como props  pelo value 
      <AuthContext.Provider value={{ User, auth, hendleUser, hendleLogin, hendleToogle, toogle }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

