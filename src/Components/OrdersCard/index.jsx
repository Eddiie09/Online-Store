import React from "react";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts, products = [] } = props; // Aseguramos que "products" tenga un valor por defecto

  return (
    <div className="flex flex-col mb-3 border border-black p-4 rounded-lg">
      {/* Encabezado con la fecha, total de productos y total del precio */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm">
          <span className="font-bold mr-2">Fecha:</span> {date || "Sin fecha"}
        </p>
        <p className="text-sm">
          <span className="font-bold mr-2">Total productos:</span> {totalProducts || 0}
        </p>
        <p className="text-sm">
          <span className="font-bold mr-2">Total precio:</span> ${totalPrice?.toFixed(2) || 0}
        </p>
      </div>

      {/* Lista de productos */}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="flex items-center gap-4 py-2 border-b last:border-none"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{product.title}</p>
                <p className="text-xs text-gray-600">${product.price}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-sm text-gray-500">No hay productos disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default OrdersCard;
