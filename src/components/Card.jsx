import Carrito from "../assets/CarritoIcon";
import { useCarrito } from '../context/CarritoContext';

export default function Card({ producto }) {
  const { agregarAlCarrito } = useCarrito();

  const handleClick = (e) => {
    e.preventDefault();
    agregarAlCarrito(producto);
  };

  return (
    <div className="w-[190px] h-[185px] relative overflow-visible shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] p-[0.8em] bg-[#707070] rounded-lg">
      <div className="pt-[10%]">
        <p className="font-black text-[1.2em] leading-normal">{producto.nombre}</p>
        <p className="text-[0.9em] pb-2.5">Product description and details</p>
      </div>
      <div className="w-full flex justify-between items-center pt-2.5 border-t-[#ddd] border-t border-solid">
        <span className="font-black text-[1.2em] leading-normal">${producto.price}</span>
        <div 
          onClick={handleClick}
          className="border flex cursor-pointer transition-[0.3s] duration-[ease-in-out] p-[0.3em] rounded-[50px] border-solid border-[#252525] hover:border hover:bg-[#58bc82] hover:border-solid hover:border-[#58bc82]"
        >
            <Carrito className="w-5 h-5"/>
        </div>
      </div>
    </div>
  );
}