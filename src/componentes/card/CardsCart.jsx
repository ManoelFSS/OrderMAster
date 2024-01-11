import React, {useState} from "react";
import styles from "./CardsCart.module.css"
import { Contador } from "../contador/Contador";
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const CardsCart = () => {

    const {produts} = useProdutsContext()

    if (produts.length <= 0) {
        return <h4 className={styles.error}>Ops, Produto não encontrado!!</h4>;
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
                                >{produto.status === false ? 0 : produto.estoque}</span>
                            </section>
                        </div>
                        <div className={styles.contador}>
                            <section>
                                { (produto.status === true && produto.estoque === 0) || (produto.status === false && produto.estoque > 0) || (produto.status === false && produto.estoque === 0) ? 

                                    <>
                                        <h3>Indisponivel</h3>
                                    </> :
                                    <>
                                       <Contador index={produto.id} caunt={produto.contador} /> 
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