import Tarjeta from "../Orquestadores/Tarjeta";
import Bot from "../Componentes/Tarjeta/Boton";

export default function Tar({tarjetas}){
    return(
        <div>
        {
            tarjetas.map((minion)=>(
                <Tarjeta
                    key={minion.id}
                    title={minion.title}
                    descripcion={minion.descripcion}
                    img={minion.img}
                    color={minion.color}
                />
            ))
        }
        <Bot/>
        </div>
    )
}