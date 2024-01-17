import React from "react"
import styles from "./Home.module.css"
import { Menu } from "../../componentes/menu/Menu"
import { Header } from "../../componentes/header/Header"
import { Rotas } from "../../Rotas"
import { Card_carrinho } from "../../componentes/cards/card_carrinho/Card_carrinho"

export const Home = ()=>{
    return (
        <section className={styles.painel}>
            <Menu/>
            <section className={styles.container}>
                <Header/>
                <Rotas/>
            </section>
            <Card_carrinho/>
        </section>
    )
}