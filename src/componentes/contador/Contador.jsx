import React, {useState} from "react";
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Contador = (props) => {
    
    const {
        setCautItem
    } = useProdutsContext()


    const [contador, setcontador] = useState(0)


    const hendleCaunt = (item) => {
        console.log(item)
        setcontador(item.target.innerHTML === "+" ? contador > 0 ? contador + 1 : props.db_caunt + 1 : contador > 0 ? contador - 1 : props.db_caunt - 1)
    }

    return (
        <>
            <div onClick={(item)=> {hendleCaunt(item), setCautItem(contador <= 0 ? props.db_caunt - 1 : contador - 1, props.index)}}>-</div>
            <div
            style={{color: props.db_caunt <= 0 ? "#fff" : "#7bff00" }}
            >{
               contador > 0 ? contador : props.db_caunt
            }</div>
            <div onClick={(item)=>{ hendleCaunt(item), setCautItem(contador <= 0 ? props.db_caunt + 1 : contador + 1 , props.index)}}>+</div>
        </>
        
    )
}