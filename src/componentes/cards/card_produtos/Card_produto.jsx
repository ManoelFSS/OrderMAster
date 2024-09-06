import React, {useEffect, useState} from "react";
import {Container_Card_Product} from "./CardStyles";
import { Contador } from "../../contador/Contador";
import { useProdutsContext } from "../../../contexts/ProdutsContext";

export const CardsCart = () => {

    const {produts} = useProdutsContext()
    const [reload, setReload] = useState("https://64.media.tumblr.com/55f80a38a4ec003e4926138cf2831e20/tumblr_om086g92Eq1runoqyo7_250.gif")
    const [text, setText] = useState(true)

    let timeLoad;

    useEffect(()=>{
        if(produts.length <= 0){
            setReload("https://64.media.tumblr.com/55f80a38a4ec003e4926138cf2831e20/tumblr_om086g92Eq1runoqyo7_250.gif")
            timeLoad = setTimeout(()=>{
                setReload("https://www.nicepng.com/png/full/187-1873818_png-file-svg-error-icon.png")
                setText(false)
            },5000)
        }
        setText(true)
        return () => {
            clearTimeout(timeLoad);
        };
    },[produts])


    if (produts.length <= 0) {
        clearTimeout(timeLoad)
        return (
            <div className="">
                    <img src={reload} alt="" />
                    {!text ? <h2>Ops!,  Produto não encontrado...</h2> : ""}
            </div>
        );
    }

    return (
        <>
            { produts.map((produto)=>(
                <Container_Card_Product
                    key={produto.id}
                    style={{opacity:produto.status === true ?  produto.estoque <= 0 ? "0.4" : "1" : "0.4" }}
                >
                    <div className="top_card">
                        <section className="top_sections">
                            <img src={produto.image} alt="" />
                        </section>
                        <section className="top_sections">
                            <h3>{produto.nome}</h3>
                            <div className="price">
                                <h5>Preço:</h5>
                                <p>{parseFloat(produto.preco).toFixed(2)} reais</p>
                            </div>
                            <div className="status">
                                <h4>Disponiveis:</h4>
                                <span
                                    style={{color: produto.estoque <= 0 ? "#000" : "green"}}
                                >{produto.status === false ? 0 : Number(produto.estoque)}</span>
                            </div>
                        </section>
                        
                    </div>
                    { (produto.status === true && produto.estoque === 0) || (produto.status === false && produto.estoque > 0) || (produto.status === false && produto.estoque === 0) ? 
                        <>
                            <h3>Produto Esgotado</h3>
                        </> :
                        <>
                            <Contador index={produto.id} caunt={produto.contador} estoque={produto.estoque} /> 
                        </>
                    }
                    <div className="card_bottom">
                        <h3>Descrição</h3>
                        <p>{produto.descricao}</p>
                    </div>
                </Container_Card_Product>
            ))}
        </>
    )
}