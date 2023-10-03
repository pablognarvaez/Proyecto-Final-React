import {useState} from "react";

const Items = ({nombre, lista}) => {
    const [contador, setContador] =useState(0)

    const main = (accion) => {
        switch (accion){
            case "suma":
            setContador(contador + 1)
            break;
            case "resta":
                setContador(contador - 1)
                break;
                case "reset":
                    setContador(0)
                    break;
        }
    }

    return(
        <div>
            <h1>{nombre} - {contador}</h1>
            <button onClick={() => main("suma")}> Agregar al carrito</button>
            <button onClick={() => main("resta")}> Quitar del carrito</button>
            <button onClick={() => main("reset")}> Eliminar todos los productos</button>
        </div>
    )
}

export default Items;