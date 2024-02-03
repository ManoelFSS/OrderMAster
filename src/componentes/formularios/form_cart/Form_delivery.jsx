import { useState } from "react"
import styles from "./Form_delivery.module.css"

export const Form_delivery = (props) => {

    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [bairro, setBairro] = useState()
    const [referencia, setReferencia] = useState()
    const [mesa, setMesa] = useState()

    const hendle_campos_inpts = () => {

        if(props.campo_input){
            const value_inputs = [{
                rua,
                bairro,
                referencia
            }]
            localStorage.setItem("endereco", JSON.stringify(value_inputs))
        }else{
            const value_inputs = [{
               mesa
            }]

            localStorage.setItem("endereco", JSON.stringify(value_inputs))
        }
    }

    const hendlepedido = () => {
        event.preventDefault()

        if(rua !== undefined && numero !== undefined && bairro !== undefined && referencia !== undefined){
            hendle_campos_inpts()
            props.action_form()
            props.close_form()
       
        }else if(mesa !== undefined){
            hendle_campos_inpts()
            props.action_form()
            props.close_form()
        }
        
    }

   
    
    return (
        <section  
            className={styles.form_delivery}
            style={{display:props.clear_form}}
        >
            <form action="">
                {
                    props.campo_input ? (
                        <>
                            <h3>Endereço</h3>
                            <div>
                                <label htmlFor="">Rua</label>
                                <input 
                                    type="text" 
                                    placeholder="Digite o nome da rua" 
                                    required
                                    onChange={(e)=> setRua(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Numero</label>
                                <input 
                                    type="number" 
                                    placeholder="Digite o numero" 
                                    required
                                    onChange={(e)=> setNumero(e.target.value)}
                                 />
                            </div>
                            <div>
                                <label htmlFor="">Bairro</label>
                                <input 
                                    type="text" 
                                    placeholder="Digite seu bairro" 
                                    required 
                                    onChange={(e)=> setBairro(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Ponto de Referencia</label>
                                <input 
                                    type="text" 
                                    placeholder="Casa, Apartamento, Loja etc..." 
                                    required 
                                    onChange={(e)=> setReferencia(e.target.value)}
                                />
                            </div>
                        </>
                    ):(
                        <>
                            <div>
                                <label htmlFor="">Mesa</label>
                                <input 
                                    type="number" 
                                    placeholder="Digite o numero da mesa" 
                                    required 
                                    onChange={(e)=> setMesa(e.target.value)}
                                />
                            </div>
                        </>
                    )
                }
               
                <div>
                    <button
                        onClick={()=> hendlepedido()}
                    > Finalizar Pedido </button>
                    <span
                        onClick={()=> props.close_form()}
                    >Cancelar</span>
                </div>
            </form>
        </section>
    )
}