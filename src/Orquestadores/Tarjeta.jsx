
import '../Style/Tarjeta.css'
import Nombre from '../Componentes/Tarjeta/Nombre'
import Descripcion from '../Componentes/Tarjeta/Descripcion'
import Imagen from '../Componentes/Tarjeta/Imagen'

export default function Tarjeta({title,img,descripcion,color}){
    return(
        <div className='Centrar' style={{background:color}}>
            <Imagen
                imga={img}
            />
            <div className='Orga' >
                <Nombre
                    title={title}
                />
                <Descripcion
                    descripcion={descripcion}
                />  
            </div>
        </div>
    )
}

