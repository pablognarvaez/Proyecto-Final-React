import Items from "./items";

const listado = ({lista}) => {
return (
    <div>
        <h1>Listado</h1>
        <Items lista={lista} nombre= {"Remera"} />
        <Items lista={lista} suma={suma} resta={resta} nombre= {"Pantalon"} />
        <Items lista={lista} suma={suma} resta={resta} nombre= {"Accesorios"} />
    </div>
);

}

export default Listado;