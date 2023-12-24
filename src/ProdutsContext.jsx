import React, {createContext, useContext, useState, useEffect} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { app } from "./FireaseConfig";

const ProdutsContext = createContext();

export const ProdutsProvider = ({ children }) => {

    const [produts, setProduts] = useState([])
    const [modal, setModal] = useState("none")
    const [itemEditado, setIteEditado] = useState()
    const [categorias, setcategorias] = useState([])

    const getValue_modal = (value)=> {
        setModal(value)
    }

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
      const categoriafitrada = result.map((item)=> item.categoria)
      const categoriasUnicas = new Set(categoriafitrada);
      setcategorias(categoriasUnicas)

     

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

    async function deletaritem(id){
      const delet = doc(db_app, "products", id)
      await deleteDoc(delet)
      getProduts()
    }


    // pegando o item do array e suas propriedades pelo id
    const getIdModalItem = (id) => {
      const itemFitrado = produts.filter((item)=> item.id === id)
      setIteEditado(itemFitrado)
   
    }

    // const  editaritem = async (id) => {
    //   const newdoc = doc(db_app, "products",id)
    //   const atualizar = {produts}
    //   await updateDoc(newdoc,atualizar)
    //   getProduts()
    // }

    useEffect(()=>{
        getProduts()
     },[])




    return (
        <ProdutsContext.Provider value={{ produts, getValues_inputs, deletaritem, modal, getValue_modal, getIdModalItem, itemEditado, categorias}}>
            {children}
        </ProdutsContext.Provider>
    )
}


export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};