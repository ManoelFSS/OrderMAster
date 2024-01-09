import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"
import { useAuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const {hendleLogin, hendleToogle, toogle, auths, hendleCart, cart } = useAuthContext()
    const get_produtos = JSON.parse(localStorage.getItem("produtos"))
    const  filterCarrinho = get_produtos ?  get_produtos.filter((e)=> e.contador > 0 ) : ""
  

    return (
        <header>
            <section className={styles.banner}>
                
            </section>
            <section className={styles.area_toogle}>
                <div 
                    className={styles.toogle}
                    onClick={() => hendleToogle( toogle === "-310px" ? "0px" : "-310px")}
                ></div>
                <p onClick={()=> hendleLogin()}>Sair</p>
                { !auths && 
                    (
                        <div 
                            className={styles.carrinho}
                            onClick={() => hendleCart( cart === "-430px" ? "0px" : "-430px")}
                        >
                            <span
                                style={{color:filterCarrinho.length > 0 ? "#73ff00" : "tomato"}}
                            >{filterCarrinho.length}</span>
                        </div>
                    )
                }
            </section>
        
  
        </header>
    )
}