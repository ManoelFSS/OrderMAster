import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"
import { useAuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const {hendleLogin, hendleToogle, toogle } = useAuthContext()
    const  filterCarrinho = JSON.parse(localStorage.getItem("produtos")).filter((e)=> e.contador > 0 )
  

    return (
        <header>
            
            <section className={styles.area_toogle}>
                <div 
                    className={styles.toogle}
                    onClick={() => hendleToogle( toogle === "-310px" ? "0px" : "-310px")}
                ></div>
                <p onClick={()=> hendleLogin()}>Sair</p>
                <div className={styles.carrinho}>
                    <span>{filterCarrinho.length}</span>
                </div>
            </section>
            <section className={styles.banner}>
                <h2>Kbana Drinks</h2>
            </section>
  
        </header>
    )
}