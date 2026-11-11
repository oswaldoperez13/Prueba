import { Link } from 'react-router-dom'
import Boton from '../../img/boton.jpg'

export default function Bot(){
    return(
        <Link to="/Formulario"><img src={Boton} alt="" /></Link>
            
    )
}