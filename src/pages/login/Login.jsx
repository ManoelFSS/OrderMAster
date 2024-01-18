import React, {useState} from "react"
import { useAuthContext } from "../../contexts/AuthContext" //recebendo a funçao  AuthContext
import Styles from "./Login.module.css"

export const Login = () =>{
    
    const {signInGoogle } = useAuthContext(); // recebendo funçao hendle_user  pelo AuthContext 

    return (
        <section className={Styles.container_login}>
            {/* <div className={Styles.area_login}>
                <form action="#">
                    <div>
                        <label htmlFor="usuario">Usuário</label>
                        <input 
                            required
                            autoComplete="off"
                            id="usuario" 
                            type="text" 
                            placeholder="Digite seu Usuário" 
                            onChange={(e) => setusuario(e.target.value)}// pegando o valor do input e atualizando o userState user
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            required
                            autoComplete="off"
                            id="password" 
                            type="password" 
                            placeholder="Digite seu Password" 
                            onChange={(e) => setPassword(e.target.value)}// pegando o valor do input e atualizando o userState password
                        />
                    </div>
                    <button
                        // onClick={()=> hendle_user()} // usando a funçao hendle_user vinda do AuthContext, passando os valores dos inputs d login
                    >Login</button>
                </form>
            </div> */}
            <img src="https://img.restaurantguru.com/r5cf-Kabana-bar-e-petiscaria-logo.jpg" alt="" />
            <h4 
                onClickCapture={(e)=> {signInGoogle(), e.target.style.visibility = "hidden" }}
                className={Styles.google}
            >Fazer Login com Google</h4>
        </section>
    )
}