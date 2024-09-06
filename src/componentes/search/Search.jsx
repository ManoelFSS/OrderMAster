import React, { useState } from "react";
import { Container_search } from "./SearchStyles";
import { useProdutsContext } from "../../contexts/ProdutsContext";

export const Search = () =>{

    const {categorias, getCategoriaFillter} = useProdutsContext()

    const menuAtivo = JSON.parse(localStorage.getItem("menuAtivo"))
    const [categoriaAtiva, setCategoriaAtiva] = useState(menuAtivo ? JSON.parse(localStorage.getItem("menuAtivo")): "" );

    const hendlecategoria_ativa = (item) => {
        setCategoriaAtiva(item);
        localStorage.setItem("menuAtivo", JSON.stringify(item))
        getCategoriaFillter(item)
    };

    return (
        <Container_search>
            <div className="search">
                <h2>Categorias</h2>
                <input 
                    type="text" 
                    placeholder="Pesquisar Produto" 
                    onChange={(e)=> hendlecategoria_ativa(e.target.value) }
                />
            </div>
            <div className="menu_categorias">
                <ol>
                    <li
                        style={{color: categoriaAtiva === "Todas" ? "#e7ac09" : null}}
                        onClick={(e)=> hendlecategoria_ativa(e.target.innerHTML)}
                    >Todas</li>
                    {[...categorias].map((item) => (
                        <li 
                            key={item}
                            style={{color: categoriaAtiva === item ? "#e7ac09" : null}}
                            onClick={(e)=> hendlecategoria_ativa(e.target.innerHTML)}
                        >{item}</li>
                    ))}
                </ol>
            </div>
        </Container_search>
    )
}