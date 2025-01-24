import { createContext, useState, useEffect } from "react";
import { totalPrice } from "../Utils"; // Asegúrate de que la ruta sea correcta

// Creación del contexto para el carrito de compras
export const ShoppingCartContext = createContext();

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

  // Estado para las órdenes
  const [order, setOrder] = useState([]);

  // Función para agregar una nueva orden
  const addOrder = (newOrder) => {
    setOrder((prevOrders) => [...prevOrders, newOrder]);
  };

  // Obtener productos de una API
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // Usar la función totalPrice para calcular el precio total
  const total = totalPrice(cartProducts);

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
        totalPrice: total,
        order,
        setOrder,
        addOrder, // Nueva función para registrar órdenes
        items,
        setItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
