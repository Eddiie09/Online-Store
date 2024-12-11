const CheckOutSideMenu = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="checkout-menu-overlay fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end z-50"
      onClick={onClose}
      aria-hidden={!isVisible} // Mejora de accesibilidad
    >
      <div
        className="checkout-menu-card bg-white w-80 h-full shadow-lg p-4"
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

        {/* Contenido del menú */}
        <div className="menu-content mt-8">
          <h2 className="text-lg font-semibold mb-4">Carrito de Compras</h2>
          {/* Aquí puedes mapear y renderizar los productos */}
          <p className="text-gray-500">Tu carrito está vacío.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutSideMenu;

