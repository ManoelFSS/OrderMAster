import React from "react"
import styles from "./Painel.module.css"
import { Menu } from "../../componentes/menu/Menu"
import { Header } from "../../componentes/header/Header"
import { Rotas } from "../../Rotas"

export const Painel = ()=>{
    return (
        <section className={styles.painel}>
            <Menu/>
            <section className={styles.container}>
                <Header/>
                <Rotas/>
            </section>
        </section>
    )
}