import React, {useEffect, useState} from "react";
import styles from "./Produtos.module.css"
import { Search } from "./Search";
import { Card } from "../../componentes/card/Card";
import { useProdutsContext } from "../../ProdutsContext";

export const Produtos = () =>{

  const {
      getValues_inputs,
      modal,
      getValue_modal,
      IdInput,
      setIdInput,
      
  } = useProdutsContext()
    
  const [image, setimage] = useState("")
  const [nome, setnome] = useState("")
  const [preco, setpreco] = useState("")
  const [descricao, setdescricao] = useState("")
  const [estoque, setestoque] = useState("")
  const [categoria, setcategoria] = useState("")


  const hendleCamposInput = () => {
    const ItemForm = JSON.parse(localStorage.getItem("db_item"))
  
    if (ItemForm && ItemForm.length > 0) {
      setimage(ItemForm[0].image)
      setnome(ItemForm[0].nome)
      setpreco(ItemForm[0].preco)
      setdescricao(ItemForm[0].descricao)
      setestoque(ItemForm[0].estoque)
      setcategoria(ItemForm[0].categoria)
    }
  };

  useEffect(()=>{
    if(IdInput){
      hendleCamposInput()
    }
  },[IdInput])

  const hendlecreate_card = () =>{
      
    if(image !== "" && nome !== "" && preco !== "" && descricao !== "" && estoque !== "" && categoria !==""){
      getValues_inputs(image, nome, preco, descricao, estoque, categoria)
      getValue_modal("none")
      setIdInput("")
    }else{
      alert("Preencha todos os Campos")
    }
  }

  const clearinputs = () => {
    setimage("")
    setnome("")
    setpreco("")
    setdescricao("")
    setestoque("")
    setcategoria("")
  }

    return (
        <section className={styles.produts}>
          <Search/>
            <section className={styles.area_produtos}>
              <button 
                className={styles.btn_add_produtos}
                onClick={()=> {getValue_modal("flex"), clearinputs()}}
              >+</button>
              <Card/>
          </section>
          <section 
            style={{display:modal}}
            className={styles.area_modal}
          >
            <div className={styles.modal}>
              <form action="#" className={styles.form_modal}>
                <section>
                  {image ? (
                      <img src={image} alt={nome} />
                    ):(
                      <></>
                    )
                  }
                </section>
                <section>
                  <div>
                    <label htmlFor="image">Url_imagem</label>
                    <input 
                      value={image}
                      id="image"
                      type="text" 
                      placeholder="digite ou cole a url da imagem"
                      onChange={(e) => setimage(e.target.value)} 
                    />
                  </div>
                  <div>
                    <label htmlFor="nome">Nome do Produto</label>
                    <input 
                      value={nome}
                      id="nome"
                      type="text" 
                      placeholder="digite o nome do produto"
                      onChange={(e) => setnome(e.target.value)} 
                    />
                  </div>
                  <div>
                    <label htmlFor="preco">Preço do Produto</label>
                    <input 
                      value={preco}
                      id="preco"
                      type="text" 
                      placeholder="digite o preço do produto" 
                      onChange={(e) => setpreco(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="descricao">Descrição do produto</label>
                    <textarea 
                      value={descricao}
                      name="descricao" 
                      id="descricao" cols="30" 
                      rows="5" placeholder="Digite a descrição do produto"
                      onChange={(e) => setdescricao(e.target.value)}
                    >
                    </textarea>
                  </div>
                  <div>
                    <label htmlFor="estoque">Estoque do Produto</label>
                    <input  
                      value={estoque}
                      id="estoque"
                      type="number" 
                      placeholder="Digite a quantidade" 
                      onChange={(e) => setestoque(parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="estoque">Categotia do Produto</label>
                    <input  
                      value={categoria}
                      id="categoria"
                      type="text" 
                      placeholder="Digite a Categoria" 
                      onChange={(e) => setcategoria(e.target.value)}
                    />
                  </div>
                  <button onClick={()=> { hendlecreate_card() }}>{IdInput ? "Editar" : "Adicionar"}</button>
                </section>
              </form>
              <span 
                className={styles.close_modal}
                onClick={()=> {setIdInput(""), getValue_modal("none"), clearinputs()}}
              >X</span>
            </div>
          </section>
        </section>
    )
}