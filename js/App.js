function App() {
const [totalProductos, setTotalProductos] = useState(0)
let lista = []



    return (
        <>
        <h1>Segunda Pre Entrega React</h1>
        <h2> CONTADOR: </h2>

        <h3>{totalProductos}</h3>
        <Listado lista={lista}/>

        </>
    );
}

export default App;