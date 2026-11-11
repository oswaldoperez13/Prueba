import { useState } from "react"
import minios from '../data.json'

export default function useTarjetas(){
    const [tarjetas,setTarjetas]=useState(minios)
    const agregar=(nueva)=>setTarjetas([...tarjetas,nueva])
    return {tarjetas,agregar}
}