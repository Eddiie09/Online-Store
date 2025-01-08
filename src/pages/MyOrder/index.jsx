import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  // Obtén la última orden
  const lastOrder = context.order?.slice(-1)[0];

  // Calcula el total de la suma de los productos
  const total = lastOrder
    ? lastOrder.products.reduce((sum, product) => sum + product.price, 0)
    : 0;

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">My Order</h1>
      <div>
        {lastOrder ? (
          <>
            <ul>
              {lastOrder.products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-4 py-2 border-b"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.title}</p>
                    <p className="text-xs text-gray-600">${product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Muestra el total y el botón de pago */}
            <div className="mt-4">
              <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => alert("Procesando el pago...")}
              >
                Pagar
              </button>
            </div>
          </>
        ) : (
          <p>No hay órdenes recientes.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
