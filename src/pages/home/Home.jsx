import React from "react"
import styles from "./Home.module.css"
import { Menu } from "../../componentes/menu/Menu"
import { Header } from "../../componentes/header/Header"
import { Rotas } from "../../Rotas"
import { Carrinho_compras } from "../../componentes/cards/card_compras/Card_compras"

export const Home = ()=>{
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