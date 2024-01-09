import React from "react"
import styles from "./Painel.module.css"
import { Menu } from "../../componentes/menu/Menu"
import { Header } from "../../componentes/header/Header"
import { Rotas } from "../../Rotas"
import { Carrinho_compras } from "../../componentes/carrinho_compras/Carrinho_compras"

export const Painel = ()=>{
    return (
        <section className={styles.painel}>
            <Menu/>
            <section className={styles.container}>
                <Header/>
                <Rotas/>
            </section>
            <Carrinho_compras/>
        </section>
    )
}