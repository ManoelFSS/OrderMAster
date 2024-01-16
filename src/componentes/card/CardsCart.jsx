import React, {useEffect, useState} from "react";
import styles from "./CardsCart.module.css"
import { Contador } from "../contador/Contador";
import { useProdutsContext } from "../../contexts/ProdutsContext";

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
            },2000)
        }
        setText(true)
        return () => {
            clearTimeout(timeLoad);
        };
    },[produts])


    if (produts.length <= 0) {
        clearTimeout(timeLoad)
        return (
            <div className={styles.error}>
                    <img src={reload} alt="" />
                    {!text ? <h2>Ops!,  Produto não encontrado...</h2> : ""}
            </div>
        );
    }

    return (
        <>
            { produts.map((produto)=>(
                    <section 
                        key={produto.id} className={styles.card}
                        style={{opacity:produto.status === true ?  produto.estoque <= 0 ? "0.4" : "1" : "0.4" }}
                    >
                        <div>
                            <section>
                                <img src={produto.image} alt="" />
                            </section>
                            <section>
                                <h3>{produto.nome}</h3>
                                <h5>Preço</h5>
                                <p>{parseFloat(produto.preco).toFixed(2)}</p>
                            </section>
                            <section className={styles.area_disponives}>
                                <h5>Disponiveis</h5>
                                <span
                                    style={{color: produto.estoque <= 0 ? "#000" : "chocolate"}}
                                >{produto.status === false ? 0 : Number(produto.estoque)}</span>
                            </section>
                        </div>
                        <div className={styles.contador}>
                            <section>
                                { (produto.status === true && produto.estoque === 0) || (produto.status === false && produto.estoque > 0) || (produto.status === false && produto.estoque === 0) ? 

                                    <>
                                        <h3>Produto Esgotado</h3>
                                    </> :
                                    <>
                                       <Contador index={produto.id} caunt={produto.contador} estoque={produto.estoque} /> 
                                    </>
                                }
                            </section>
                        </div>
                        <h3 className={styles.tile_descricao}>Descrição</h3>
                        <div className={styles.footer_card}>
                            <span>{produto.descricao}</span>
                        </div>
                   </section>
                ))
            }
        </>
    )
}