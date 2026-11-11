import { useNavigate } from "react-router-dom"
import Desintegracion from "../Componentes/Home/Desintegracion"
import ABC from '../img/Des.jpg'
export default function Pruebs(){
    const navigate=useNavigate()
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>Bienvenidos</h1>
            <Desintegracion
                src={ABC}
                onFin={()=> navigate('/Tarjetas')}
            />
        </div>
    )
}