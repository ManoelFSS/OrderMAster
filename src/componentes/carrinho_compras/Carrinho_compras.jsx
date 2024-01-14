import React, {useEffect, useState} from "react";
import styles from "./Carrinho.module.css"
import { Contador } from "../contador/Contador";
import { useAuthContext } from "../../contexts/AuthContext";

export const Carrinho_compras = () => {
    
    const {cart, User} = useAuthContext()

   
    const getLocalstorageProduts = JSON.parse(localStorage.getItem("produtos")) || []
    const produtoFiltrado = getLocalstorageProduts ? getLocalstorageProduts.filter((e)=> e.contador > 0 ) : ""
    
    const totalGeral = produtoFiltrado.reduce((total, produto) => {
      const valorProduto = parseFloat(produto.preco * produto.contador)
      return total + valorProduto;
    }, 0);



    const [getLocalizacao, setGetLocalizacao] = useState()
  

    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
    
              const localiza = `https://www.google.com/maps/place/${latitude},${longitude}`;
              setGetLocalizacao(localiza)
            },
            (error) => {
              console.error("Erro ao obter a localização:", error);
            }
          );
        } else {
          console.error("Permissão de localização não concedida pelo usuário.");
        }
      });
    } else {
      console.error("A API Geolocation não é suportada neste navegador.");
    }

 



    
  const hendlePedido = () => {

    const dataHoraAtual = new Date();

      const ano = dataHoraAtual.getFullYear();
      const mes = ('0' + (dataHoraAtual.getMonth() + 1)).slice(-2); // Os meses são zero-indexed, então adicionamos 1 e garantimos dois dígitos
      const dia = ('0' + dataHoraAtual.getDate()).slice(-2);
      const horas = ('0' + dataHoraAtual.getHours()).slice(-2);
      const minutos = ('0' + dataHoraAtual.getMinutes()).slice(-2);
      const segundos = ('0' + dataHoraAtual.getSeconds()).slice(-2);

      const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

      const getInfoUser = JSON.parse(localStorage.getItem("UserName"))

      const headerText = `🥂_____________*KBANA DRINKs*____________🥂\n\n*Cardapio:* https://main--classy-conkies-01e448.netlify.app/\n\nNome: *${getInfoUser}*\nLocalização: ${getLocalizacao}\n\nPedido: *${dataHoraFormatada}*\n`
      
     
   
    const mensagem = produtoFiltrado
      .map(
        (produto) => {
          const mensagem = `${headerText}\n*${produto.nome}* - Valor: *${Number(produto.preco).toFixed(2)}* R$ unit\nDescrição: *${produto.descricao}*\nQuantidade: *${produto.contador}*\nPreço Total: *${Number(produto.preco * produto.contador).toFixed(2)}* R$ ✅\n_____________________________________\n`;
          return mensagem 
         
        }).join('\n\n')

        const linkWhatsApp = `https://api.whatsapp.com/send?phone=5574935050160&text=${encodeURIComponent(mensagem + `\n💸 Total Apagar: *${totalGeral.toFixed(2)}* ⚠\n`)}`;
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