import React, { useEffect, useState } from "react";
import styles from "./Header.module.css"
import { useAuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const { hendleToogle, toogle, auths, hendleCart, cart } = useAuthContext()
    const get_produtos = JSON.parse(localStorage.getItem("produtos"))
    const  filterCarrinho = get_produtos ?  get_produtos.filter((e)=> e.contador > 0 ) : ""
  

    return (
        <header>
            <section className={styles.conteiner_header}>
                <div 
                    className={styles.toogle}
                    onClick={(e) => {
                    hendleToogle( toogle === "-310px" ? "0px" : "-310px")}}
                    style={{background: toogle === "-310px" ? 
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6N2Kga6CZUh1JQ4HjC0xLv0Qd1aHZ5zeJrw&usqp=CAU') no-repeat center / cover" : 
                    "url('data:image/png;base64,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') no-repeat center / cover" }}
                ></div>
               
                { !auths && 
                    (
                        <div 
                            className={styles.carrinho}
                            onClick={() => hendleCart( cart === "-420px" ? "0px" : "-420px")}
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