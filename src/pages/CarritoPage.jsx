import { useNavigate } from "react-router-dom";
import CardCarrito from "../components/CardCarrito";
import Header from "../components/Header";
import { useCarrito } from "../context/CarritoContext";

export default function CarritoPage() {
  const navigate = useNavigate();
  const { carrito, realizarPago } = useCarrito();
  const handlePago = () => {
    realizarPago();
    navigate("/")
  }
  const total = carrito.reduce(
    (sum, item) => sum + item.price * item.cantidad,
    0
  );

  return (
    <>
      <Header />
      <div className="flex gap-5 w-full p-5">
        <div className="w-2/3 p-5">
          {carrito.length === 0 ? (
            <p className="text-center text-xl">
              No hay productos en el carrito
            </p>
          ) : (
            carrito.map((item) => <CardCarrito key={item.id} producto={item} />)
          )}
        </div>
        <div className="w-1/3">
          <div className="bg-[#707070] m-5 p-7 sticky top-10">
            <h1 className="text-2xl font-bold text-center">Pedido</h1>
            <div className="flex justify-around py-5 font-medium text-xl">
              <p>Total</p>
              <p>$ {total.toFixed(2)}</p>
            </div>
            <button className="p-5 bg-black w-full font-bold hover:bg-white hover:text-black" onClick={handlePago}>
              Pagar {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
