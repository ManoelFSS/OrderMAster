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
                {/* <input type="file" id="wpload" style={{display:"none"}} /> */}
                <p onClick={()=> hendleLogin()}>Sair</p>
                <label 
                    htmlFor="wpload" 
                    className={styles.img}
                >
                    <img src={JSON.parse(localStorage.getItem("photo"))} alt="" />
                </label>
                <h2>{JSON.parse(localStorage.getItem("UserName")).split(" ")[0]}</h2>
            </div>
            <ul>
                <li>Produtos</li>
                {/* <li>Clientes</li>
                <li>Configurações</li> */}
            </ul>
        </nav>
    )
}