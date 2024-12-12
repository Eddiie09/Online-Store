import { createContext, useState } from 'react';
import { totalPrice } from '../Utils'; // Asegúrate de que la ruta sea correcta

// Creación del contexto para el carrito de compras
export const ShoppingCartContext = createContext();

// Proveedor del contexto del carrito de compras
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0); // Inicializado como número
    const [cartProducts, setCartProducts] = useState([]); // Inicializado como array
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
    };

    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false);
    };

    // Usar la función totalPrice para calcular el precio total
    const total = totalPrice(cartProducts); // Cambiado a totalPrice en lugar de calculateTotalPrice

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                totalPrice: total, // Aquí se asigna el total calculado
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
