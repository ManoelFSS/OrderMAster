import React, {createContext, useContext, useState, useEffect} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { app } from "./FireaseConfig";

const ProdutsContext = createContext();

export const ProdutsProvider = ({ children }) => {

    const [produts, setProduts] = useState([])

    const db_app = getFirestore(app)
    const userCollectionRef = collection(db_app, "products")

    const getProduts = async () => {
      const response = await getDocs(userCollectionRef)
      const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setProduts(result)
      console.log(result)
    }

    useEffect(()=>{
        getProduts()
     },[])

    return (
        <ProdutsContext.Provider value={{ produts }}>
            {children}
        </ProdutsContext.Provider>
    )
}


export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};