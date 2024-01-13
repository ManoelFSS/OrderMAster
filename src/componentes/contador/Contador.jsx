import React, {useState} from "react";
import styles from "./Contador.module.css"
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Contador = (props) => {

    const {getProduts} = useProdutsContext()
    const hendleCaunt = (item, id) => {
        console.log(item.estoque)
        item.target.innerHTML === "+" ? props.caunt < props.estoque ? props.caunt + 1 : props.estoque : props.caunt > 0 ? props.caunt  - 1 : 0  
        const newProdutos = JSON.parse(localStorage.getItem("produtos"))
        const posicaoOriginal = newProdutos.findIndex((e) => e.id === id)
       
        if(item.target.innerHTML === "+"){
            newProdutos[posicaoOriginal].contador =  props.caunt < props.estoque ? props.caunt + 1 : props.estoque
            localStorage.setItem("produtos", JSON.stringify(newProdutos))
            getProduts()
            console.log(newProdutos)
        }else{
            newProdutos[posicaoOriginal].contador = props.caunt > 0 ? props.caunt - 1 : 0
            localStorage.setItem("produtos", JSON.stringify(newProdutos))
            getProduts()
            console.log(newProdutos)
        }
        
    }

    return (
        <section>
            <div onClick={(item)=>  hendleCaunt(item, props.index)}>-</div>
            <div
            className={styles.contador}
            style={{color: props.caunt  <= 0 ? "#fff" : "#7bff00" }}
            >{
                props.caunt 
            }</div>
            <div onClick={(item) =>  hendleCaunt(item, props.index)}>+</div>
        </section>
        
    )
}