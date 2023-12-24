import React, {useState} from "react";
import styles from "./Card.module.css"
import { useProdutsContext } from "../../ProdutsContext";

export const Card = () => {

    const {produts, getEditModal} = useProdutsContext("none")
    const [btn_toogle,setbtn_toogle] = useState(true)

    const hendleEditar = (flex) => {
        getEditModal(flex)
    }

    const toogle = (e) => {
        setbtn_toogle(!btn_toogle ? true : false)
    }

    return (
        <>
            {
               produts.map((produto)=>(
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
                                    <p>{produto.preco}</p>
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
                                    onClick={()=> toogle(produto.id)}
                                ></div>
                            </div>
                        </div>
                        <div className={styles.area_edit_exclir}>
                            <div 
                                className={styles.btn_editar}
                                onClick={()=> hendleEditar("flex")}
                            ></div>
                            <div className={styles.btn_excluir}></div>
                        </div>
                    </figure>
                ))
            }
            
        </>
    )
}