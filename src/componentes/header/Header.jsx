import { Container_header } from "./HeaderStyles.jsx"
import { useAuthContext } from "../../contexts/AuthContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRectangleXmark, faCartShopping} from '@fortawesome/free-solid-svg-icons'


export const Header = () => {

    const { hendleToogle, toogle, auths, hendleCart, cart } = useAuthContext()
    const get_produtos = JSON.parse(localStorage.getItem("produtos"))
    const  filterCarrinho = get_produtos ?  get_produtos.filter((e)=> e.contador > 0 ) : ""

    return (
        <Container_header>
            <section className={"header_area"}>
                { toogle === "-310px" ? 
                    <FontAwesomeIcon 
                        className="iconToogle" 
                        icon={faBars} 
                        onClick={(e) => {hendleToogle( toogle === "-310px" ? "0px" : "-310px")}}
                    /> : 
                    <FontAwesomeIcon 
                        className="iconToogle" 
                        icon={faRectangleXmark} 
                        onClick={(e) => {hendleToogle( toogle === "-310px" ? "0px" : "-310px")}}
                    /> 
                }
                
                { !auths && (
                        <div 
                            className={"carrinho"}
                            onClick={() => hendleCart( cart === "-420px" ? "0px" : "-420px")}
                        >
                            <FontAwesomeIcon className="iconCart" icon={faCartShopping} />
                            <span
                                style={{color:filterCarrinho.length > 0 ? "#73ff00" : "#fff"}}
                            >{filterCarrinho.length}</span>
                        </div>
                    )
                }
            </section>
        </Container_header>
    )
}