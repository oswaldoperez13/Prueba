import { useState } from "react"
import { useNavigate } from "react-router-dom"

const inicial={Nombre:'',Imagen:'',Descripcion:'',Color:''}
export default function useFormulario({agregar}){
    const navigate=useNavigate()
        const [datos,setDatos]=useState(inicial)
        const cambiar=(e)=>{
            setDatos({...datos,[e.target.name]:e.target.value})
        }
        const enviar=(e)=>{
            e.preventDefault()
            agregar({
                title:datos.Nombre,
                img:datos.Imagen,
                descripcion:datos.Descripcion,
                color:datos.Color
            })
            navigate('/Tarjetas')
        }
        return{
            datos,
            onCambio:cambiar,
            onEnviar:enviar,
            onReset:()=>setDatos(inicial),
            onVolver:()=>navigate('/Tarjetas')
        }
}