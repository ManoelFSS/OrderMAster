import React, {useState} from "react";
import styles from "./Produtos.module.css"
import { useProdutsContext } from "../../contexts/ProdutsContext";


export const Search = () =>{

    const {categorias, getCategoriaFillter} = useProdutsContext()

    const menuAtivo = JSON.parse(localStorage.getItem("menuAtivo"))
    const [categoriaAtiva, setCategoriaAtiva] = useState(menuAtivo ? JSON.parse(localStorage.getItem("menuAtivo")): "" );

    const hendlecategoria_ativa = (item) => {
      setCategoriaAtiva(item);
      localStorage.setItem("menuAtivo", JSON.stringify(item))
      getCategoriaFillter(item)
    };

    return (
        <section className={styles.search_container}>
            <div className={styles.search_input}>
                <div className={styles.input_area}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar Produto" 
                        onChange={(e)=> hendlecategoria_ativa(e.target.value) }
                    />
                     <h2>Categorias</h2>
                </div>
            </div>
            <div className={styles.search_categorias}>
            <ol className={styles.search_ul}>
                    <li
                        style={{borderBottomColor: categoriaAtiva === "Todas" ? "chocolate" : null}}
                        onClick={(e)=> hendlecategoria_ativa(e.target.innerHTML)}
                    >Todas</li>
                    {[...categorias].map((item) => (
                        <li 
                            key={item}
                            style={{borderBottomColor: categoriaAtiva === item ? "chocolate" : null}}
                            onClick={(e)=> hendlecategoria_ativa(e.target.innerHTML)}
                        >{item}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
  
}