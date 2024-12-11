import { createContext, useState } from 'react';

// Creación del contexto para el carrito de compras
export const ShoppingCartContext = createContext();

// Proveedor del contexto del carrito de compras
export const ShoppingCartProvider = ({ children }) => {
    // Estado para el contador de elementos en el carrito
    const [count, setCount] = useState(0); // Inicializado como número

    // Estado para los productos en el carrito
    const [cartProducts, setCartProducts] = useState([]); // Inicializado como array

    return (
        <ShoppingCartContext.Provider
            value={{
                count, // Número total de productos en el carrito
                setCount, // Función para actualizar el contador
                cartProducts, // Lista de productos en el carrito
                setCartProducts, // Función para actualizar la lista de productos
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
