import React, {createContext, useContext, useState, useEffect} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import { app } from "../serices/FirebaseConfig";

const ProdutsContext = createContext();

export const ProdutsProvider = ({ children }) => {

    const [produts, setProduts] = useState([])
    const [modal, setModal] = useState("none")
    const [categorias, setcategorias] = useState([])
    const [editarItem, setEditarItem] = useState()// controla se o produto  vai ser editado  ou criado  se o valor for| true edita  | false cria seu valor e o proprio id 
   

    const getFillterCategoria = JSON.parse(localStorage.getItem("menuAtivo"))
    const [fillterCategoria, setfillterCategoria] =  useState(getFillterCategoria === null ? localStorage.setItem("menuAtivo", JSON.stringify("Todas")) : JSON.parse(localStorage.getItem("menuAtivo")) ) //localStorage.setItem("menuAtivo", JSON.stringify("Todas"))

    const db_app = getFirestore(app)
    const userCollectionRef = collection(db_app, "products")

    const getProduts = async () => {
        const response = await getDocs(userCollectionRef)
        const  result = response.docs.map((doc) => ({...doc.data(), id: doc.id}))

        const getLocalstorage_produtos = JSON.parse(localStorage.getItem("produtos"))
        getLocalstorage_produtos  === null ? localStorage.setItem("produtos", JSON.stringify(result)) : ""  // observa se no localstorage existe, se for null pega o result do firebase e armazena no localstorage
        setProduts(JSON.parse(localStorage.getItem("produtos"))) // pega os produtos do localstorage e guarda dentro do sstate produts assim e enviad0 por context para o componente card

        if(getLocalstorage_produtos){// se for true entra e faz o fillter dos produtos
          
          const itemfiltrado = getLocalstorage_produtos.filter((filtro) => fillterCategoria === " " || fillterCategoria === "Todas" ? filtro.categoria : filtro.nome.toLowerCase().includes(fillterCategoria.toLowerCase()) || filtro.categoria.toLowerCase().includes(fillterCategoria.toLowerCase()))
          setProduts(itemfiltrado) // envia os produtos filtrados para  state produts 
          
          const categoriafitrada = getLocalstorage_produtos.map((item)=> item.categoria) // pega todos os tems  do localstorage faz o map pegando todos os nomes de categorias
          const categoriasUnicas = new Set(categoriafitrada);// new Set retorna um novo array de categoria unicas sem repetir os nomes
          setcategorias(categoriasUnicas)// guarda todos os nome de categoria no state categoria, assim e passado por context para componente search e feito o map para renderizar os nomes das categorias
          console.log(itemfiltrado)
          if(itemfiltrado <= 0){
            localStorage.setItem("menuAtivo", JSON.stringify("Todas"))
            window.location.reload()
          }
        }
      
    }
    // funçao criar/editar item no firebase
    async function criarProduto(image, nome, preco, descricao, estoque, categoria){
     
      event.preventDefault()

      if(editarItem){
        editaritem (editarItem,image, nome, preco, descricao, estoque, categoria)
        setEditarItem("")
        getProduts()
      }else{
        
        await addDoc(userCollectionRef, {
          image:image,
          nome:nome,
          preco:preco,
          descricao:descricao,
          estoque:estoque,
          status:true,
          categoria:categoria,
          contador:0,
        })
      }
      setReload_Localstorage()
      getProduts() 
    }

    // deletando item no firebase
    async function deletaritem(id){
      const itemDeletado = doc(db_app, "products", id)
      await deleteDoc(itemDeletado)
      setReload_Localstorage()
      getProduts()
    }
    
    // editar item no firebase 
    const  editaritem = async (id, image, nome, preco, descricao, estoque, categoria) => {
      setReload_Localstorage()
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

    
    const setCautItem = async (caunt, id) => {
    
      console.log(id)
      const newdoc = doc(db_app, "products",id)
      const atualizar = {
        contador:caunt > 0 ? caunt : 0,
      }
      await updateDoc(newdoc,atualizar)
      getProduts() 
    }


    const setToogle = async (id, toogle) => {
      setReload_Localstorage()

      const newdoc = doc(db_app, "products",id)
      const atualizar = {
        status:toogle
      }
      await updateDoc(newdoc,atualizar)   
      getProduts()
    }

    const  setReload_Localstorage = () => {
      const getLocalstorage_UserName = JSON.parse(localStorage.getItem("UserName"))
      const getLocalstorage_User = JSON.parse(localStorage.getItem("User"))
      const getLocalstorage_photo = JSON.parse(localStorage.getItem("photo"))
      const getLocalstorage_menuativo = JSON.parse(localStorage.getItem("menuAtivo"))
      localStorage.clear()

      localStorage.setItem("User", JSON.stringify(getLocalstorage_User))
      localStorage.setItem("photo", JSON.stringify(getLocalstorage_photo))
      localStorage.setItem("UserName", JSON.stringify(getLocalstorage_UserName))
      localStorage.setItem("menuAtivo", JSON.stringify(getLocalstorage_menuativo))
      getProduts() 
    }


    const getIdModalItem = (id) => {
      if(modal !== ""){
        const itemFitrado = produts.filter((item)=> item.id === id)
        localStorage.setItem("db_item", JSON.stringify(itemFitrado))
        setEditarItem(id)
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
          setEditarItem,
          editarItem,
          setToogle,
          setCautItem,
          
        }}>{children}</ProdutsContext.Provider>
    )
}

export const useProdutsContext = () => {
  return useContext(ProdutsContext);
};