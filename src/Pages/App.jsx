import Tar from "./Tar";
import Pruebs from "./h";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useTarjetas from "../Hook/useTarjetas";
import FormularioPage from "./FormularioPage";

export default function App(){
    const {tarjetas,agregar}=useTarjetas()
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/Tarjetas" element={<Tar tarjetas={tarjetas}/>}/>
                <Route exact path="/" element={<Pruebs/>}/>
                <Route exact path="/Formulario" element={<FormularioPage agregar={agregar}/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}