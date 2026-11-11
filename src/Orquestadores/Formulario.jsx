import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from '../Orquestadores/Tarjeta'

const Etiquetas=[
    {etiqueta:"Nombre",tipo:"text",holder:"Ana"},
    {etiqueta:"Imagen",tipo:"text",holder:"URL"},
    {etiqueta:"Descripcion",tipo:"text",holder:"Descripcion"},
    {etiqueta:"Color",tipo:"text",holder:"Hexa o nombre"}
]

export default function Formulario({datos,onCambio,onEnviar,onReset,onVolver}){
    const Botones=[
                {tipo:"submit",nombre:"Enviar"},
                {tipo:"button",nombre:"Volver",onClick:onVolver},
                {tipo:"reset",nombre:"Reset"}
            ]
    return(
        <div className='centrar'>
            <form onSubmit={onEnviar} onReset={onReset}>
                <div >
                    {Etiquetas.map((campo)=>(
                        <Campos
                            key={campo.etiqueta}
                            etiqueta={campo.etiqueta}
                            tipo={campo.tipo}
                            holder={campo.holder}
                            valor={datos[campo.etiqueta]}
                            onCambio={onCambio}
                        />
                    ))}
                </div>
                <div className='campos'>
                    {Botones.map((boton)=>(
                        <Boton
                            key={boton.nombre}
                            tipo={boton.tipo}
                            nombre={boton.nombre}
                            onClick={boton.onClick}
                        />
                    ))
                    }
                </div>
            </form>
            <Tarjeta
                title={datos.Nombre}
                img={datos.Imagen}
                descripcion={datos.Descripcion}
                color={datos.Color}
            />
        </div>
    )
}