import React from "react"
import styles from "./Menu.module.css"
import { useAuthContext } from "../../contexts/AuthContext"

export const Menu = () =>{

    const {toogle, hendleLogin} = useAuthContext()

    return (
        <nav 
            className={styles.menu}
            style={{left:toogle}}
        >
            <div className={styles.logo}>
                <span></span>
                <p onClick={()=> hendleLogin()}>Sair</p>
                <img src={JSON.parse(localStorage.getItem("photo"))} alt="" />
                <h2>{JSON.parse(localStorage.getItem("UserName")).split(" ")[0]}</h2>
            </div>
            <ul>
                <li style={{backgroundColor:"tomato"}}>Produtos</li>
                <li>Clientes</li>
                <li>Configurações</li>
            </ul>
        </nav>
    )
}