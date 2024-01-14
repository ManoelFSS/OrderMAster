import React, {useEffect} from "react";
import styles from "./Carrinho.module.css"
import { Contador } from "../contador/Contador";
import { useAuthContext } from "../../contexts/AuthContext";

export const Carrinho_compras = () => {
    
    const {cart,} = useAuthContext()
   
    const getLocalstorageProduts = JSON.parse(localStorage.getItem("produtos")) || []
    const produtoFiltrado = getLocalstorageProduts ? getLocalstorageProduts.filter((e)=> e.contador > 0 ) : ""
    
    const totalGeral = produtoFiltrado.reduce((total, produto) => {
      const valorProduto = parseFloat(produto.preco * produto.contador)
      return total + valorProduto;
    }, 0);
   
    
  const hendlePedido = () => {
    const mensagem = produtoFiltrado
      .map(
        (produto) => {
          const mensagem = `${produto.nome} - Valor: ${Number(produto.preco).toFixed(2)} R$ unit\n Quantidade: ${produto.contador}\n  Preço Total: ${Number(produto.preco * produto.contador).toFixed(2)} R$ ✅\n _________________________`;
          return mensagem 
         
        }).join('\n\n')

    const mensagemEncoded = encodeURIComponent(mensagem + `💸 Total Apagar: *${totalGeral.toFixed(2)}* ⚠`);
    const linkWhatsApp = `whatsapp://send?text=${mensagemEncoded}`;
    window.location.href = linkWhatsApp;
  };
     

    

    localStorage.setItem("carrinho", JSON.stringify(produtoFiltrado))
    
    return (
      <aside 
        className={styles.carrinho_compras}
        style={produtoFiltrado.length > 0 ? {marginRight: cart} : {marginRight: "-420px"}}
      >
        <div className={styles.area_produtos}>
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
                    <Contador  index={card.id} caunt={card.contador} estoque={card.estoque}/>
                  </div>
                  <div className={styles.area_preco_total}>
                    <h4>Total</h4>
                    <h5>{parseFloat(card.preco * card.contador).toFixed(2)}</h5>
                  </div>
                </section>
              )
          )}
        </div>
        <div className={styles.footer_carrinho}>
          <div>
            <button
              onClick={()=> hendlePedido()}
            >Fazer Pedido</button>
          </div>
          <div className={styles.area_valorTotal}>
            <h3>Valor Total:</h3>
            <span>{totalGeral.toFixed(2)}</span>
            
          </div>
        </div>
      </aside>
    );
  };