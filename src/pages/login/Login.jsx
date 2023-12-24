import React, {useState} from "react"
import { useAuthContext } from "../../AuthContext" //recebendo a funçao  AuthContext
import Styles from "./Login.module.css"

export const Login = () =>{
    
    const { User, hendleUser } = useAuthContext(); // recebendo funçao hendle_user  pelo AuthContext 

    const [usuario, setusuario] = useState("")
    const [Password, setPassword] = useState("")

    const hendle_user = () => {
        event.preventDefault()
        let flow = false;
    
        if(usuario !== "" && Password !== ""){
            flow = false
            User.filter((e)=>{

                if(usuario === e.nome && Password === e.password && e.adm === true){
                    flow = true
                    console.log(" adm autorizado")
                    localStorage.setItem("User", JSON.stringify(true))
                    hendleUser()
                };
                
                if(usuario === e.nome && Password === e.password && e.adm === false){
                    console.log("gerente autorizado")
                    flow = true
                    localStorage.setItem("User", JSON.stringify(false))
                    hendleUser()
                };
            });

            if(!flow){
                alert("usuario incorreto")
                flow = true
            };
    
        };
  
        if(!flow){
          alert("preencha todos os campos ")
        }; 
            
      };


    return (
        <section className={Styles.container_login}>
            <div className={Styles.area_login}>
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
                        onClick={()=> hendle_user()} // usando a funçao hendle_user vinda do AuthContext, passando os valores dos inputs d login
                    >Login</button>
                </form>
            </div>
        </section>
    )
}