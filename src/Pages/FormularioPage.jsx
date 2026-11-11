import useFormulario from "../Hook/useFormulario";
import Formulario from "../Orquestadores/Formulario";

export default function FormularioPage({agregar}){
    const props=useFormulario({agregar})
    return <Formulario {...props}/>
}