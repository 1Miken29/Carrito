import Card from "../components/Card";
import Header from "../components/Header";
import prodJSON from "../assets/productos.json"

export default function IndexPage(){
    const productos = prodJSON

    return(
        <>
            <Header />
            <div className="m-5 flex gap-9 flex-wrap">
                {productos.map((producto, index) => (
                    <Card key={index} producto={producto} />
                ))}
            </div>
        </>
    )
}