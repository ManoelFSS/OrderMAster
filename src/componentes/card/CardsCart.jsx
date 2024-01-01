import React, {useState} from "react";
import styles from "./CardsCart.module.css"
import { useProdutsContext } from "../../contexts/ProdutsContext";
import { Contador } from "../contador/Contador";
export const CardsCart = () => {

    const {
            produts,
            // getValue_modal,
            // deletaritem,
            // getIdModalItem,
            // setToogle,
            setCautItem
        } = useProdutsContext()
   
    // const getId = (id) => {
    //     deletaritem(id)
    // }

   
    
    

    return (
        <>
            {
               produts.map((produto)=>(
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
                        </div>
                        <div className={styles.contador}>
                            <section>
                                { (produto.status === true && produto.estoque === 0) || (produto.status === false && produto.estoque > 0) || (produto.status === false && produto.estoque === 0) ? 

                                    <>
                                        <h3>Indisponivel</h3>
                                    </> :
                                    <>
                                       <Contador index={produto.id} db_caunt={produto.contador}/> 
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