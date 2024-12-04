import React, { useEffect, useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import ProductDetail from '../ProductDetail'; // Ajusta la ruta según tu estructura de carpetas

const Products = () => {
  const context = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    // Petición GET a la API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Product Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {/* Imagen del Producto */}
            <figure className="relative w-full h-48">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain bg-gray-50"
              />
            </figure>
            {/* Información del Producto */}
            <div className="p-4 flex flex-col justify-between h-40">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">${product.price}</p>
              <button
                className="bg-yellow-500 text-white text-sm font-medium py-2 rounded mt-4 hover:bg-yellow-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que se active el evento de abrir el modal
                  context.setCount(context.count + 1);
                }}
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProductDetail product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default Products;
