export default function CardCarrito(){

    return(
        <div className="flex justify-between items-center p-5 mb-2 bg-slate-400 rounded-lg">
            <h1 className="text-3xl text-center font-semibold">Product Name</h1>
            <p className="text-xl font-semibold">$ price</p>
            <div className="text-xl flex gap-3 items-center">
                <label>Unidades</label>
                <input type="number" className="w-10 pl-2"/>
                <button>+</button>
                <button className="bg-red-500 p-2">Delete</button>
            </div>
        </div>
    )
}