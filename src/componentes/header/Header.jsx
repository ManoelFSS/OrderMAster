import React from "react";
import styles from "./Header.module.css"
import { useAuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const {hendleLogin, hendleToogle, toogle } = useAuthContext()

    return (
        <header>
            <div 
                className={styles.toogle}
                onClick={() => hendleToogle( toogle === "-200px" ? "0px" : "-200px")}
            ></div>
            
            <p onClick={()=> hendleLogin()}>Sair</p>
        </header>
    )
}