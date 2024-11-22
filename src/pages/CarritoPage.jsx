import CardCarrito from "../components/CardCarrito";
import Header from "../components/Header";

export default function CarritoPage() {
  return (
    <>
      <Header />
      <div className="flex gap-5 w-full  p-5">
        <div className="w-2/3 p-5">
          <CardCarrito />
        </div>
        <div className="w-1/3">
          <div className="bg-[#707070] m-5 p-7 sticky top-10">
          <h1 className="text-2xl font-bold text-center">Pedido</h1>
          <div className="flex justify-around py-5 font-medium text-xl">
            <p>Total</p>
            <p>$ Dinero</p>
          </div>
          <button className="p-5 bg-black w-full font-bold hover:bg-white hover:text-black">Pagar {'>'}</button>
          </div>
        </div>
      </div>
    </>
  );
}
