import React, {createContext, useContext, useState, useEffect} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { app } from "./FireaseConfig";

const ProdutsContext = createContext();

export const ProdutsProvider = ({ children }) => {

    const [produts, setProduts] = useState([])

    const getValues_inputs = (image, nome, preco, descricao, estoque, categoria) =>{
      criarProduto(image, nome, preco, descricao, estoque,categoria)
    }

    const db_app = getFirestore(app)
    const userCollectionRef = collection(db_app, "products")

    const getProduts = async () => {
      const response = await getDocs(userCollectionRef)
      const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setProduts(result)
      console.log(result)
    }

    async function criarProduto(image, nome, preco, descricao, estoque, categoria){
      event.preventDefault()
   
      await addDoc(userCollectionRef, {
        image:image,
        nome:nome,
        preco:preco,
        descricao:descricao,
        estoque:estoque,
        status:true,
        categoria:categoria,
      })
      getProduts()
    }

    useEffect(()=>{
        getProduts()
     },[])




    return (
        <ProdutsContext.Provider value={{ produts, getValues_inputs}}>
            {children}
        </ProdutsContext.Provider>
    )
}


export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};