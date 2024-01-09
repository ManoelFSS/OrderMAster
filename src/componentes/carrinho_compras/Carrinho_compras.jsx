import React, {useEffect} from "react";
import styles from "./Carrinho.module.css"
import { Contador } from "../contador/Contador";
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Carrinho_compras = () => {
    

   
    const getLocalstorageProduts = JSON.parse(localStorage.getItem("produtos"))
    const produtoFiltrado = getLocalstorageProduts.filter((e)=> e.contador > 0 )
    
    localStorage.setItem("carrinho", JSON.stringify(produtoFiltrado))
    
    return (
      <aside className={styles.carrinho_compras}>
        { produtoFiltrado.map(
          (card) =>
            card.contador > 0 && (
              <section key={card.id}>
                <div>
                  <img src={card.image} alt={card.nome} />
                </div>
                <div className={styles.contador}>
                  <div className={styles.are_infor}>
                    <h3>{card.nome}</h3>
                    <h5>Preço</h5>
                    <p>{parseFloat(card.preco).toFixed(2)}</p>
                  </div>
                </div>
                <div className={styles.area_contador}>
                  <Contador  index={card.id} caunt={card.contador}/>
                </div>
                <div className={styles.area_preco_total}>
                  <h4>Total</h4>
                  <h5>{parseFloat(card.preco * card.contador).toFixed(2)}</h5>
                </div>
              </section>
            )
        )}
      </aside>
    );
  };