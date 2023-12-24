import React from "react"
import styles from "./Menu.module.css"
import { useAuthContext } from "../../AuthContext"

export const Menu = () =>{

    const {toogle} = useAuthContext()

    return (
        <nav 
            className={styles.menu}
            style={{left:toogle}}
        >
            <div className={styles.logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-kCI5xM6PSClj25D6sUZZk6wVwSZO84B7Q&usqp=CAU" alt="" />
                <h2>Manoel</h2>
            </div>
            <ul>
                <li style={{backgroundColor:"chocolate"}}>Produtos</li>
                <li>Clientes</li>
                <li>Configurações</li>
            </ul>
        </nav>
    )
}