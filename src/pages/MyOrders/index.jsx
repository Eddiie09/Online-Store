import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  // Asegurarnos de que cada orden tenga el precio total calculado correctamente
  const ordersWithTotals = context.order.map((order) => {
    const totalPrice = order.products.reduce((sum, product) => sum + product.price, 0);
    return { ...order, totalPrice }; // Agregamos el totalPrice a cada orden
  });

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="text-xl font-bold mb-4">My Orders</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {ordersWithTotals.length > 0 ? (
          ordersWithTotals.map((order, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between"
              style={{ maxHeight: '300px', minHeight: '250px', overflow: 'hidden' }}
            >
              <h2 className="text-lg font-semibold mb-2">
                Order #{index + 1} - Total: ${order.totalPrice.toFixed(2)}
              </h2>
              <div className="overflow-y-auto">
                <ul className="space-y-2">
                  {order.products.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-center gap-4 py-2 border-b last:border-b-0"
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
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-gray-600 col-span-full">No orders found.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrders;
