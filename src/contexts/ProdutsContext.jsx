import React, {createContext, useContext, useState, useEffect} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { app } from "../serices/FirebaseConfig";

const ProdutsContext = createContext();

export const ProdutsProvider = ({ children }) => {

    const [produts, setProduts] = useState([])
    const [modal, setModal] = useState("none")
    const [categorias, setcategorias] = useState([])
   

    const [image, setimage] = useState("")
    const [nome, setnome] = useState("")
    const [preco, setpreco] = useState("")
    const [descricao, setdescricao] = useState("")
    const [estoque, setestoque] = useState("")
    const [categoria, setcategoria] = useState("")
    
    const [IdInput, setIdInput] = useState()
    const [Id, setId] = useState()
    

    const getFillterCategoria = JSON.parse(localStorage.getItem("menuAtivo"))
    const [fillterCategoria, setfillterCategoria] =  useState(getFillterCategoria ? JSON.parse(localStorage.getItem("menuAtivo")) : localStorage.setItem("menuAtivo", JSON.stringify("Todas")))

    const db_app = getFirestore(app)
    const userCollectionRef = collection(db_app, "products")

    const getProduts = async () => {
      const response = await getDocs(userCollectionRef)
      const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
      const itemfiltrado = result.filter((filtro) => fillterCategoria === " " || fillterCategoria === "Todas" ? filtro.categoria : filtro.nome.toLowerCase().includes(fillterCategoria.toLowerCase()) || filtro.categoria.toLowerCase().includes(fillterCategoria.toLowerCase()))
      setProduts(itemfiltrado)
      
      const categoriafitrada = result.map((item)=> item.categoria)
      const categoriasUnicas = new Set(categoriafitrada);
      setcategorias(categoriasUnicas)
    }

    async function criarProduto(image, nome, preco, descricao, estoque, categoria){
      
      event.preventDefault()

      if(Id){
        editaritem (Id,image, nome, preco, descricao, estoque, categoria)
        setId("")
      }else{

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
     
    }

    async function deletaritem(id){
      const itemDeletado = doc(db_app, "products", id)
      await deleteDoc(itemDeletado)
      getProduts()
    }

    const  editaritem = async (id, image, nome, preco, descricao, estoque, categoria) => {

      const newdoc = doc(db_app, "products",id)

      const atualizar = {
        image:image,
        nome:nome,
        preco:preco,
        descricao:descricao,
        estoque:estoque,
        categoria:categoria,
        contador:0,
        
      }

      await updateDoc(newdoc,atualizar)
      getProduts()  
    }

    
    const setCautItem = async (id, caunt) => {
      const newdoc = doc(db_app, "products",id)
      const atualizar = {
        contador:caunt >= 0 ? caunt : 0
      }
      await updateDoc(newdoc,atualizar)
      getProduts()  
    }


    const setToogle = async (id, toogle) => {
      const newdoc = doc(db_app, "products",id)
      const atualizar = {
        status:toogle
      }
      await updateDoc(newdoc,atualizar)
      getProduts()  
    }


    const getIdModalItem = (id) => {
      if(modal !== ""){
        const itemFitrado = produts.filter((item)=> item.id === id)
        CamposInput(itemFitrado)
        setIdInput(id)
        setId(id)
      }  
    }

    const getCategoriaFillter = (fillCater) => {
        setfillterCategoria(fillCater)
    }

    const getValue_modal = (value)=> {
          setModal(value)
          
    }

    const getValues_inputs = (image, nome, preco, descricao, estoque, categoria) =>{
      criarProduto(image, nome, preco, descricao, estoque,categoria)
    }

    const CamposInput = (el) => {
      localStorage.setItem("db_item", JSON.stringify(el))
    }

    useEffect(()=>{
        getProduts()
     },[fillterCategoria, getFillterCategoria])

    return (
        <ProdutsContext.Provider value={{ 
          produts, 
          getValues_inputs, 
          deletaritem, 
          modal, 
          getValue_modal, 
          getIdModalItem,  
          categorias, 
          getCategoriaFillter,
          IdInput,
          setIdInput,
          setToogle,
          setCautItem,
          
        }}>{children}</ProdutsContext.Provider>
    )
}

export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};