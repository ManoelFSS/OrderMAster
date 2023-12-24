import React, {useState} from "react";
import styles from "./Produtos.module.css"
import { Search } from "./Search";
import { Card } from "../../componentes/card/Card";

export const Produtos = () =>{

  const [modal, setmodal] = useState("none")

    return (
        <section className={styles.produts}>
          <Search/>
            <section className={styles.area_produtos}>
              <button 
                className={styles.btn_add_produtos}
                onClick={()=> setmodal("flex")}
              >+</button>
              <Card/>
          </section>
          <section 
            style={{display:modal}}
            className={styles.area_modal}
          >
            <div className={styles.modal}>
              <form action="#" className={styles.form_modal}>
                <section>
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUXFxcXGBUVGBUVFRcXFRUXFxcWFhYYHSggGBolHRYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAM4A9QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADkQAAEDAgUCBAUCBAYDAQAAAAEAAhEDBAUSITFBUWEicYGREzKhsdEGwUJi4fAUI1JykvFTgqJD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC8RAAIBAgQDBwQDAQEAAAAAAAABAgMRBBIhMUFRkQUTImGBofAycbHBFNHhI0L/2gAMAwEAAhEDEQA/AP3FERAEREAREQBERAEREAREQBERAEREAREQBFn3eItZsMx6D7eauUySASIMCRvHZVxqwlJxTu1udOEkk2tyRERWHIREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFVxF5bTcQSNNxvuNlaUVeiHtLTsRC5nFuLS5MmLSabKGF4jn8Lvm4PUflT1MSpNdlLxPrA8zsFzlwx1NxaCJB+YH+4Ky7irMsB39R5r52fa9WjHJKN5J6t+X24+f51PThgY1HmT0+fLHc3F8xg3k9BqsupfPqnK0b/AMI/cqrhVg6qBw0aF3Jjp37rora2awQ0R9z5nlbaUsRjFmfgg+W7+fEzPNU6DtvL2KlnhwaQ52rtwB8o8upWkqF/iDabTDml20SN+4XvDLv4tMO52PmP7C20pUacu4ha9r2KJqpJZ5bbFxERaioIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKOrUDRJ2X17gBJMAcrCxG+zH+UbflZcXiY0IXe/D5yRbRpOo/I91cRqB2YQR/o4995VrFb80mtgQXTvrED76rDs8RpipLwTHygde6tX1VlzlYczA05i5pBgRGs7cLyKGOc6UrVPHJ+FN9X5X6JK5tnQUZxvHRbv5vZ+pQqYw8ky93oY+gU1pd1XeLO4DjU6qpSs6YOpmDMmRm6abAfdWLivBAGq8lSrQeedRu3KTNbhB+GMfYhuq2UHrwOV4t7cNBqP1P+n8/hQvtXk5nmOyiqVNInRZ1KTnquv5ZflWWyf3Oi/T2Jz/AJboAgkHqSdifX6LTxa7+GyG/M7QdupXD2l14jHMBdA0Q3M4yQI110HC9nD9pT7l0lulZS5L5sYK2Fiqik+hn14iI219eF02C2hpUgDuTmPYmNFz9rVYHBziJzaNPJ4kBa9TFHRuPb+qdnzo0W6s3rayS9+v9jEqc0oL1NtFzbcZfmGsiRIgahdCx4IBGoOy93D4unXvk4c/jPPq0ZU7ZuJ7REWkqCL5K+oAiIgCIiAIiIAiIgCIiAIiICC5uGsaXO2H7mFn3eJNc3/Kf4ukEGPONFaxEsLHMdrmEQN/PssEBtJsaefJ815PaGKnSeVNWtrzRrw9KMldrW/oTPcSJcY66rGvbwEwPlH1Xm9vS+YOnmPso7WyL93Bv1K+YrVpVnljt58ep69OkoLNI+UaOYzmhaefw5W6NG/c9SeT/YUTbMMB/wAyT2AXngAAk+6Uk6Sfnvb8cXbnzIm1O3kRVrjKJPsq9lcOJcY10jfTsrn+AE5qxAHDB+5U4qAaMDY2jp5AI6bv4nZ8uP3ZOeKVkr/gz69wXaT5qq2i+r4WAwNyPyVZqD4tSBI6/b3lbrMtMAaR25SjSzt3enPi/nqTOrkSSWpQwzA/h+Nx1HG60a7A4QZjtoqlxio1DY00MmNuyw34257oAI8/wtDq0YLLHXmUxpVqrzM2q2Ht0LHEEddR9dlE+1cTrU8+FQZXdtmP9VVuMRLCAZ/vuqXUhJXUPexbGlO9sxtsoZIOYK/h+IljgCTk5G8dCOnkuft73Nrkce5mPwrFvfNJgaLqlinSnmgrdf3ocVKGZWlr0OsqYsz+HxfT+qo18Qe7c5R02+qoNIOxC9MuhTMljX9jqfQ7BehU7RqVXacsq8k/1r7oyxw8Y/Srv56GlhFNxqF52AOvn3W2udpY27NJb4OGjcevK3qTw4Bw2Ikeq9rs+dJ03CnK9nrf8mLExmpXkrEiIi3mcIiIAiIgCIiAIsa+vqjXwxzS2B0JB5kyohilQblvqPwsNTtClTk4yT08tOpojhpySasbywrzFIqObMNHTnTqqlfEi4+I+gmFn3NRjtToes6+y8nHdsRcctJ/702NNHCWd5lm6xKZDdO/MrO/xBPzeIdwonVA3bXuV7sXZ5aY37e68F1J1XeUv6PSjCMFsexTp7t08vwV5rUiYLCAeeB59l5vbUtcA06HrwvPxhT2OY9Tt6BVZHmtJo7urJp3LdtbEAmqYHAB1XiviIbowABUH3JeYlWRYtyzJJ76D2V8Zu2Wmrfllbhd3n/hn17uTq7U90qVSBpJPZZpDXXDWRI1J9BstO60E+f0XEoZbdTUoxRBbXhZrmj2K2sKYXH4r55ifvGw9FgOoAuZOoBJI84+my3jd+HoOisVk7o4qrTTiVLitD3OjQnULQt6FKsJgT20IXO1r8DNmG6Yfek+JoIA2KQUorM1cTpNrTQ16+GPaZzHL2GvqvVMM6ZvPVW7DFwdH+/5Wg2gwnMyATz1WinCMleHTiZZ1JLSZj/CJ0DSO5BA91SrYNVMRl3MmeF0Vepl3afPhQi5DjAbJ7QuJunGVpb+v9ExnO14owDTr0iAWOcOC2T9NVMy711nN0PHouloMyiTv06Krd0WvP8AMeew2ldSwcWrrRhYi71Rn0bsl+2nK7TDHg0mQZhoB8wFyVGzyzzJ3U1jVcyRLgOxPPYLf2dX/jTlmu0+u5nxNNVUsuljs0XLC9E6PJ9SrFO/d/5D66/derHtai3a3umYXhJI6FFVsapewOdvrtz3VpelCSlFSXEzNNOzCIi6II6hMGBJjQbT2lYFzjNQEtdTDerTLpHfqF0aq3tFjmH4gBABM8jyKy4qlVqR/wCc8r9LP76afLpltKcIvxRuc1QfReYcMv8AsMR6GdF6xTDmsa1zKhOY8x0k/ssavUIeYBAnQnf1hWqV4CMr/Q/uvknWhllTqQjfhK1v8+x6/dyupJu3I8VLIkS2pJ6GAvGD2sucXSXN0AOw7qO6qupuG8HZ42nof9P2UlPEo0O55+yopSjGXij/AEXNScdBiFJ52aZnjlRUqDqRDnka8DWPVWW3hI1MLFxm+8JI1hQ3Fvw7lkFL6Wbjn5zDj7aeqyalk41MrTM7Efv0XnDb3O1juo8/NXqVzkfm0g6dlLs3rvexCvG6RZtsMbTbr4ncn8BUL+/+GPhtguOw7dfqrF/iwYMoMu6fv1j8Llq1Um4pucd3EHyIMD3AXeVSlpyOqcZPWZYwmzIrl0/wHruSNfutPEDp6fdWLWkA8+X7qxUw01NCcrdNeuuyiUZVGjqVRKV2YtWoGtnjmFJaU6lUTTa5wOziC1vnJ/ZdBSs6NMa+I99fovT8RHA0RxpQ+tlXfy/8rqZVv+lM+tZ5/wBrIH/0VZpYCWyGmGDRvWB1U5vXO2lV7jFQ0ZRq7oNSVb3tKUbWenocJ1m9yvd2uTkFfLS9czY6L7Tw6vW1PgH83zeysDBmM1c8ud04VPcSfiSsW54Wyyd35GnaYkyoIOh6FT0KLWTkA19/QrlLnwFXrHF3N31CuhiXe1RbceRRPD6Xjsa97eBo134Cy3XJJkj2K12vZWbG/bkLHxDD3M2d4T7hTXhKSutURSlFaPRnulfjbP56qX/GdNfus+3s6TSSRLjqSSTJWnbXDRs0D2UU3JeFM7mo72Pbawduw+xU9OuJDS2J5gcDruvD71vWF9wy/Y6syCDEyN4Gy10E5TUb6sz1NE3Y6XDARTaCI6eXCuIi+qhDJFR5Hjyd22ERF0QFWvaHxGFsxO3mDI+ysoolFSTT4kp2d0chWo8EQRIIPVYppw/I7ToeCP2IXZ4zQgfEHHzdx+Quev7MPZIMOGrXdCF8tjsE4ztw/Xzc9bD100Li0LB4fE3lvZc9eOAHb6t7HsuiwzEs7S1+lRu4/cdQqGN4bmBewa8t4I/KxVKEX4qe3I1UptSyz6keEUHPYSRMmAfKP6qjjts1kNA3Bn6f1XR4LQyUGCI8IJneTqVzeNvmqfJROCjFHVOo5VHyMj9M1w0up6nK6dejtP7812Nxb03Bp1gkAjgLmLLBnmr8RhEFpaRPcEE910Ntb1QIcwjrsfsVxVbcs0Ve/wCTqdr7k9zg9N+oADogOA6bA9QqLf09mIL3AQQdNTpryp2XDqZgzHXp5q852cefRdKcKizRWvK5XmnHS55L6dPYSeu6pXWI7kmANfZQXRLDDj/0oXuBkQIWOdScvq25IujSS13PVvcmuJYQQRIdxrsp7agR82pHssf9Os+BTFNxGjngeWd2X6EKe4xAvcQDDdduStOSnFu2tvfl7DLLbYu17kuOVroHX8LQsqdOmJAGbqdT7rBo1Wslz3BoaNztCntH1bky1j2UwYDnDLmEbtnWPRWU09ZnE4ra9ka91igbOZ0DoqIxB1ZwZRbv/Edh3U7MGpjV5Lj1cdPblauH0GtEgCD9l3FSlKzZW3CCulcrtwym0ZnjMeSeSsW7pue+WM8InUaT/RdWaQdv8vTqqlzdtaDAAUTpW1vZfk5p1Xfm/YwKT3MMiR9FqsxIPYQ7Q7LMDy93Me0+S0G21IeKIjfeJ94VVNTjfI9PY7qRT+rc52tific1uuUkE8SF5o4k5z8hOXbbfVaIsqOYktyySdzr3UdfAmlxe2pB2iAR+V04xdy1TWx7qUdg2SXbTrtE68bhXP0ZYubWqZ4MAajUa6q7h1sQ2NDpvwCrdGKRJmCQAY7T+VuwlZRySmtIr3MlfVSiuJ1jNh5L0uRo4k5hlpPcHUHr5LqLarnYHREiYK97CY6nib5d0eVVoyp7kyIi2lIREQENzRD2OYdnAj3C4o5qXhqDwzlzcA7Qei7tY2J0w1xzNDmPEPadRroTCz4mgqsbceBbSqZH5HHYlbGQ5phw1Dh9lYw7FcwyP0eOOD/RR34daOh8vt36Mq75CdmVD16O581FToNL2PbB1nyhfNVKUqU2tnx+cj14yjKHNcGdA8hrPRcNesPxHP3BOo6RpouzvavgPksZtnnbLfm+h81kryeey5FmHaSbZz1S9q0Rnpa85ToD2ng911OHY4HgZtCQD7hZ/wDhGPBDm6jfgr1YWDQ7YkNGx+i4p1eEd/0W1FF6s1rnxawPyFntrGmdNW9CrNxdNY0k/wDZ6LxTeyqJEJKGZ3i7Mri7R1WhaqU6ddkbHcGdQVWNplB0nrAn1hQPoupnM3UK3bYg0mXA+nVTJpu1RWZOqXhd0c3dW1R9XJTaXAjMIB0MwQTsON1q4Z+lngf5j4nhup/5bfRbrL+mNtFXq4oOPoulUpJWbuHVqy0irH2jg1GnrlzEcu8XtwFJeXjWDqs+tfuPyg+a5/GjVfDQHwdyARpzspVTNpHTzEaTb8bNijdmvWDM0jcgcAf2B6rdu6sAARr+ywP0tZilTLoifQgCQB915xjEYcADr21jsoXhTtrfqROOadlsjVrYi7KeuwWe05jLnLGbd1HGGie5WjbYed3uPpojUptPidZVTRrMr0291Dc3Ad8unlqqV3cUqLZcMx4G5Pksp94azhm0aNmD5fXqrcsktX0+I4jG+pqV2mqIaY/m4WhYWrKepOY9T+wWRRu42VqheNLsoMnoNfU9FxGOaXmJNpWNitdzoF4trN9U+EEnk8epVy1sGugnX7LpLKiGtgCAvYodlSm81V/P0efUxSWkTKssBAINR0/yjb1PK3kRexRw9OirU1YxTqSnrJhERXHAREQBV72jmaVYRAclVOUOa5ofTdIcxwkEHfQrBfgIpu+LbVD8IaupOPiYIOxO47HXzXYYtawZGxXPV6cGRoeyzYjDQrRtL0LqNaVN3R5tbpp0P5VxlJkaaeS5y5a9rwSwOZzllrh3A2WnRtHOE0arXfyPOV47SN/UL5qfZmJg72T+x6X8inLZ2LNxazqPm/vdYlf47XZWhpB6fueFoXN3VYIqMczu4S30eNPqq9C4B068jlZO7nntJWL1O0eDPdnbF0F4BjjcSs7HB8AmoDHUdey123IY3SSei5bGWOqulzj2aRoAr1TpxVhTk3K72NPBv1G2sId4XdDt6FaFxaAjM0wf73X5/eUqrdojsYK2MExqqG+MEtBjvx+VZOEZR1290duNneBsC4g5X6d+FepUZ40VUOZWbI1n3UVau+3a4jxgAwOfJZe4S4E529FuXKz/AIR1Pv8AZWaeICNgVxWDsr3bjVeJk+BuuVg5M9TprvoruLYVVptzCtlPQAx5bq3u1CdrhxTWu50hvpnhZlegajoGg5PJnhZmCfFruyF5hsF209veCutFFtJkkgAbk9PNcxw8pTsnscyqKmivaWgbGm3H5UF/du+WmMxB1PAWPin6hzEspGG8u5Pl2U2GVHEfI+OuV0e8LR3emSBXr9UjRs7Ll4k9TBWi6vTpMzcTAAGrj0AGpK82trUdsDHfT7rUssPyuzOIJiNtpjY78KzD9n1ZTWmnMqqYmCW5zVj+nqtd5qVZo0yScv8AHBO38vr7Lq7PDaVMBrGADru4+Z3KsBStC9+hhKdHZa8zz6uInU325E9tTkgLUAhVrKlAlWlqM4REQBERAEREAREQENxSD2kLmb23IJC6xUcTtM4kbhGDja1NUalJbdzRhUKlNQSZ5uKzdG1XDsfEPqs2tRe4yYnqzwH1jdbL2KIsVU6MJ/UjuNSUdmZYw8H/APWo094Kkbhr+Lph7PaR+5V/KvJYqHgKL4FqxVRGLe4HWI+aif8Aa+PuFsYVaNZSa0gaDXmTyV4qWgO4VmlTWDF9nyUf+Jqo4tPSoctfivSuHOptOSRppB046FdJYXDa4HB/iHIVl9EO3CUrBgMhuq6l2Y3C19bciP5ivqjQoZGjKxoa0eX2WZi+FPuIh7WNG5dM+gWjTYBwpYXdLsqEdZu/sVyxjv4Vb3MLB8MNBzmh2cuPzBuXYQBue/utu6wtlYAVSSP9DZA9eqmYIUwWqngqcG3uVTxM5eRFaYdQpfJRaO8a+6uZvTy0UbV7ataikrJFDbe57avYXgL01SQewrdpRzHsoKNMuMBbFCllEID3C+oikgIiIAiIgCIiAIiIAiIgMzEcPzeJu/Rc3cUIXbqjfYeKmo0d16+aixJxdRigcxa15ZuYYIVF9NAVC1MqmLV8hARhq9gL6AvQQH1qlaowpAgJWqRqiC9tQEwXsKJpUjUBIF7CjapWhAemqxQpFxgL1a2hd5dVrUKAYIHugPlvbhg79VOiKSAiIgCIiAIiIAiIgCIiAIiIAiIgIq9BrxDhKxL3BDuzUdOf6roEUWBw1e1LTBEearmmu8rUGvEOaCs64wNh+Ulv1CEnJZEhblfAnjaHeW6zatsWmHaHvp91FybFcBewFKKJXoUD0U3IsRhe2hehSVihal22vlr9kuLELQpWtWlb4OT8xhaNDDmN4nzQGNb2rnbBatthwGrte3CvARsvSmwueQI2XpEQgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAvJE7r0iAqOw2id6TP+IXkYTQ/8TfZXUUWFysyxpN2psH/qFYAX1FICIiAIiIAiIgCIiAIiIAiIgCIiA//Z" alt="" />
                </section>
                <section>
                  <div>
                    <label htmlFor="image">Url_imagem</label>
                    <input 
                      id="image"
                      type="text" 
                      placeholder="digite ou cole a url da imagem" 
                    />
                  </div>
                  <div>
                    <label htmlFor="nome">Nome do Produto</label>
                    <input 
                      id="nome"
                      type="text" 
                      placeholder="digite o nome do produto" 
                    />
                  </div>
                  <div>
                    <label htmlFor="preco">Preço do Produto</label>
                    <input 
                      id="preco"
                      type="text" 
                      placeholder="digite o preço do produto" 
                    />
                  </div>
                  <div>
                    <label htmlFor="descricao">Descrição do produto</label>
                    <textarea name="descricao" id="descricao" cols="30" rows="5" placeholder="Digite a descrição do produto">
                    </textarea>
                  </div>
                  <div>
                    <label htmlFor="estoque">Estoque do Produto</label>
                    <input  
                      id="estoque"
                      type="number" 
                      placeholder="digite a quantidade" 
                    />
                  </div>
                  <button>Adicionar</button>
                </section>
              </form>
              <span 
                className={styles.close_modal}
                onClick={()=> setmodal("none")}
              >X</span>
            </div>
          </section>
        </section>
    )
}