import { Container_Contador } from "./ContadorStyles"
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Contador = (props) => {

    const {getProduts} = useProdutsContext()

    const hendleCaunt = (item, id) => {
        
        //item.target.innerHTML === "+" ? props.caunt < props.estoque ? props.caunt + 1 : props.estoque : props.caunt > 0 ? props.caunt  - 1 : 0  
        const newProdutos = JSON.parse(localStorage.getItem("produtos"))
        const posicaoOriginal = newProdutos.findIndex((e) => e.id === id)
        console.log(posicaoOriginal)
        
        if(item.target.innerHTML === "+"){
            newProdutos[posicaoOriginal].contador = props.estoque > 0 ? props.caunt + 1 : props.caunt
            newProdutos[posicaoOriginal].estoque = props.estoque > 0 ? props.estoque - 1 : props.estoque
            localStorage.setItem("produtos", JSON.stringify(newProdutos))
            getProduts()
            console.log(newProdutos)
        }else{
            newProdutos[posicaoOriginal].contador =  props.caunt > 0 ?  props.caunt - 1 : 0
            newProdutos[posicaoOriginal].estoque = props.caunt <= 0 ? props.estoque : props.estoque + 1 
            localStorage.setItem("produtos", JSON.stringify(newProdutos))
            getProduts()
            console.log(newProdutos)
        }
        
    }

    return (
        <Container_Contador>
            <div className="btn" onClick={(item)=>  hendleCaunt(item, props.index)}>-</div>
            <div className="btn" style={{color: props.caunt  <= 0 ? "#fff" : "#000" }}> {props.caunt }</div>
            <div className="btn" onClick={(item) =>  hendleCaunt(item, props.index)}>+</div>
        </Container_Contador>
    )
}