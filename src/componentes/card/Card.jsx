import React, {useState} from "react";
import styles from "./Card.module.css"
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Card = () => {

    const {
            produts,
            getValue_modal,
            deletaritem,
            getIdModalItem,
            setToogle
        } = useProdutsContext()
   
    const getId = (id) => {
        deletaritem(id)
    }
    
    

    return (
        <>
            {
             produts ?  produts.map((produto)=>(
                    <figure 
                        className={styles.card} key={produto.id}
                        style={{opacity:produto.status === true ?  produto.estoque <= 0 ? "0.4" : "1" : "0.4" }}
                    >
                        <div className={styles.area_img}>
                            <img src={produto.image} alt={produto.nome}/>
                        </div>
                        <h2>{produto.nome}</h2>
                        <div className={styles.area_text}>
                            <div>
                                <div>
                                    <h4>Preço</h4>
                                    <p>{parseFloat(produto.preco).toFixed(2)}</p>
                                </div>
                                <div>
                                    <h4>Estoque</h4>
                                    <p>{produto.estoque}</p>
                                </div>
                                <div>
                                    <h4>Status</h4>
                                    <p>{produto.status === true ?  produto.estoque <= 0 ? "Indisponivel" : "Disponivel" : "Indisponivel" }</p>
                                </div> 
                            </div>
                            <div>
                                <div>
                                    <h4>Descrição</h4>
                                    <div className={styles.area_descricao}>
                                        <p>
                                            {produto.descricao}
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.area_toogle}>
                            <div className={styles.toogle_card}>
                                <div 
                                    className={styles.circo_toogle}
                                    style={{left:produto.status === true ? produto.estoque <= 0 ? "0px" : "25px"  : "0px", backgroundColor:produto.status === true ?  produto.estoque <= 0 ? "chocolate" : "#48ff00" : "chocolate" }}
                                    onClick={()=> setToogle(produto.id, produto.status ? false : true)}
                                ></div>
                            </div>
                        </div>
                        <div className={styles.area_edit_exclir}>
                            <div 
                                className={styles.btn_editar}
                                onClick={()=> {getValue_modal("flex"), getIdModalItem(produto.id)}}
                            ></div>
                            <div 
                                className={styles.btn_excluir}
                                onClick={()=> getId(produto.id)}
                            ></div>
                        </div>
                    </figure>
                ))
            :<h2>Error</h2>} 
            
        </>
    )
}