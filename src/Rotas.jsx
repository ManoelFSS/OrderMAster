import { Routes, Route } from "react-router-dom";
import { Produtos } from "./pages/produtos/Produtos";

export const Rotas = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                    <Route path="/" element={<Produtos  />} />
                {/* <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Estacionamento" element={<Estacionamento  />} /> */}
                {/* <Route path="/Novo_video/:id" element={<Novo_video  />} /> */}
            </Routes>
        </>
    )
}