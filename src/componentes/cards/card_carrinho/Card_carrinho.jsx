import React, {useEffect, useState} from "react";
import styles from "./Carrinho.module.css"
import { Contador } from "../../contador/Contador";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useProdutsContext } from "../../../contexts/ProdutsContext";
import { Form_delivery } from "../../formularios/form_cart/Form_delivery";

export const Card_carrinho = () => {
  
  const getLocalstorageProduts = JSON.parse(localStorage.getItem("produtos")) || []
  const produtoFiltrado = getLocalstorageProduts ? getLocalstorageProduts.filter((e)=> e.contador > 0 ) : ""
  localStorage.setItem("carrinho", JSON.stringify(produtoFiltrado))

  const totalGeral = produtoFiltrado.reduce((total, produto) => {
    const valorProduto = parseFloat(produto.preco * produto.contador)
    return total + valorProduto;
  }, 0);

  const {cart, hendleCart, User} = useAuthContext()
  const {setReload_Localstorage} = useProdutsContext()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [InformacoesLocalizacao ,setInformacoesLocalizacao] = useState()
  const [form_close, setfrom_close] = useState("none")

  const getEndereco = () => {

    const obterInformacoesLocalizacao = async () => {
      try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const resposta = await fetch(url);
        
        if (resposta.ok) {
          const dados = await resposta.json();
          setInformacoesLocalizacao(dados);
          console.log(dados)
        } else {
          console.error('Erro ao obter informações de localização');
        }
      } catch (erro) {
        console.error('Erro na solicitação:', erro);
      }
    };

    obterInformacoesLocalizacao();
  }
    
    const [getLocalizacao, setGetLocalizacao] = useState()

    const getlocaut = () =>{

      if ("geolocation" in navigator) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLatitude(latitude)
                setLongitude( longitude)
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
    }

  const hendlePedido = () => {
   
    getlocaut()
    const getEndereco = JSON.parse(localStorage.getItem("endereco"))
    const enderecoFiltrado = getEndereco.map((e)=> `*Rua*: ${e.rua}\n*Bairro*: ${e.bairro}\n*Referencia*: ${e.referencia}\n*Mesa*:${e.mesa}`)
  
    const dataHoraAtual = new Date();

    const ano = dataHoraAtual.getFullYear();
    const mes = ('0' + (dataHoraAtual.getMonth() + 1)).slice(-2); // Os meses são zero-indexed, então adicionamos 1 e garantimos dois dígitos
    const dia = ('0' + dataHoraAtual.getDate()).slice(-2);
    const horas = ('0' + dataHoraAtual.getHours()).slice(-2);
    const minutos = ('0' + dataHoraAtual.getMinutes()).slice(-2);
    const segundos = ('0' + dataHoraAtual.getSeconds()).slice(-2);

    const dataHoraFormatada = `${dia}/${mes}/${ano} as ${horas}:${minutos}:${segundos}`;
    
    const getInfoUser = JSON.parse(localStorage.getItem("UserName"))
    const enderecoText = ""

    const headerText = `*Cardapio:*https://order-master.netlify.app/\n\n*🥂________KBANA DRINKs_________🥂*\n\n*Nome:* ${getInfoUser}\n${enderecoFiltrado}\n*Localização:* ${getLocalizacao}\n\n*Pedido:* ${dataHoraFormatada}\n`
    
    const mensagem = produtoFiltrado.map((produto) => {
          const mensagem = `\n*${produto.nome}* - Valor: *${Number(produto.preco).toFixed(2)}* R$ unit\n*Descrição:* ${produto.descricao}\n*Quantidade:* ${produto.contador}\n*Preço Total:* ${Number(produto.preco * produto.contador).toFixed(2)} R$ ✅\n_____________________________________`;
          setReload_Localstorage()
          return mensagem 
    }).join('\n')

      const linkWhatsApp = `https://api.whatsapp.com/send?phone=5574988161999&text=${encodeURIComponent(headerText + mensagem + `\n💸 Total Apagar: *${totalGeral.toFixed(2)}* ⚠\n`)}`;
      window.location.href = linkWhatsApp;
      
     
  };

  const hendle_close_form = () => {
    getlocaut()
     setfrom_close(form_close === "flex" ? "none" : "flex")
  }

  const [validate_campo_form, setvalidate_campo_form ] = useState(null)
     
  
    
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
                    <div className={styles.area_preco_total}>
                      <h4>Total</h4>
                      <h5>{parseFloat(card.preco * card.contador).toFixed(2)}</h5>
                    </div>
                  </div>
                </section>
              )
          )}
        </div>
        <div className={styles.footer_carrinho}>
          <div className={styles.area_btn_cart}>
            <button
              onClick={()=> {hendle_close_form(), setvalidate_campo_form(false)}}
            >Pedir no Local</button>
            <button
              onClick={()=> {hendle_close_form(), setvalidate_campo_form(true)}}
            >Pedir Delivery 🚀</button>
          </div>
          <div className={styles.area_valorTotal}>
            <button
             onClick={()=> hendleCart("-420px")}
            > Ver mais Produtos</button>
            <h3>Valor Total :</h3>
            <span>{totalGeral.toFixed(2)} 💰</span>
          </div>
        </div>
        <Form_delivery 
          close_form={hendle_close_form} 
          clear_form={form_close}  
          action_form={hendlePedido} 
          campo_input={validate_campo_form}
        />
      </aside>
    );
  };