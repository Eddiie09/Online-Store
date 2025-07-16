import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CheckOutSideMenu = ({ isVisible, onClose }) => {
  const context = useContext(ShoppingCartContext);

  if (!isVisible) return null;

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCount(filteredProducts.length);
    context.setCartProducts(filteredProducts);
  };

  // Cálculo del precio total
  const totalPrice = context.cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div
      className="checkout-menu-overlay fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-50"
      onClick={onClose}
      aria-hidden={!isVisible}
    >
      <div
        className="checkout-menu-card bg-white w-80 h-full shadow-lg p-4 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="text-black text-2xl font-bold hover:text-red-600 transition absolute top-4 right-4"
          aria-label="Close checkout menu"
        >
          &times;
        </button>

        {/* Contenido principal */}
        <div className="menu-content mt-8 flex-grow">
          <h2 className="text-lg font-semibold mb-4">Carrito de Compras</h2>
          {context.cartProducts.length > 0 ? (
            <ul>
              {context.cartProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center mb-4 border-b pb-2"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {product.title}
                    </p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Tu carrito está vacío.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutSideMenu;
