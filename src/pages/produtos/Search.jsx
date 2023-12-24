import React from "react";
import styles from "./Produtos.module.css"


export const Search = () =>{
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
                    <li >Todos</li>
                    <li style={{borderBottom:" solid 5px chocolate"}} >Refrigerantes</li>
                    <li>Petiscos</li>
                </ol>
            </div>
        </section>
    )
}