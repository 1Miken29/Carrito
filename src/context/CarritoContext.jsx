// context/CarritoContext.jsx
import { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            // Buscar si el producto ya existe en el carrito
            const productoExistente = prevCarrito.find(
                item => item.nombre === producto.nombre
            );

            if (productoExistente) {
                // Si existe, incrementar la cantidad
                return prevCarrito.map(item =>
                    item.nombre === producto.nombre
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            // Si no existe, agregar como nuevo producto
            return [...prevCarrito, {
                id: prevCarrito.length + 1,
                nombre: producto.nombre,
                price: producto.price,
                cantidad: 1
            }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad < 1) return;
        setCarrito(prevCarrito => 
            prevCarrito.map(item => 
                item.id === id ? {...item, cantidad: nuevaCantidad} : item
            )
        );
    };

    // Opcional: Agregar función para obtener el total
    const getTotal = () => {
        return carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
    };

    return (
        <CarritoContext.Provider value={{ 
            carrito, 
            agregarAlCarrito, 
            eliminarDelCarrito,
            actualizarCantidad,
            getTotal 
        }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    return useContext(CarritoContext);
}