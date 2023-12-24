import React, {useState} from "react";
import styles from "./Produtos.module.css"
import { useProdutsContext } from "../../ProdutsContext";


export const Search = () =>{

    const {categorias} = useProdutsContext()
    console.log(categorias)
 
    return (
        <section className={styles.search_container}>
            <div className={styles.search_input}>
                <div className={styles.input_area}>
                    <h2>Categorias</h2>
                    <input type="text" placeholder="Pesquisar Produto" />
                </div>
            </div>
            <div className={styles.search_categorias}>
                <ol className={styles.search_ul}>
                    <li>Todas</li>
                    {[...categorias].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
}