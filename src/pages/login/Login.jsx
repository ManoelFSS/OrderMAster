import { useAuthContext } from "../../contexts/AuthContext" //recebendo a funçao  AuthContext
import { Container } from "./LoginStyles.jsx"
import Google from "../../../public/images/google.png"
import kbana from "../../../public/images/kbana.png"

export const Login = () =>{
    
    const {signInGoogle } = useAuthContext(); // recebendo funçao hendle_user  pelo AuthContext 

    return (
        <Container>
            <img className="logo" src={kbana} alt="kbana" />
            <div 
                className="login-btn"
                onClickCapture={(e)=> signInGoogle()}
            >
                <img className="google" src={Google} alt="Google" />
                <h4>   
                    Fazer Login com Google
                </h4>
            </div>
        </Container>
    )
}