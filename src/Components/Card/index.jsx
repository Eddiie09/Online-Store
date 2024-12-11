import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import ProductDetail from '../ProductDetail'; // Ajusta la ruta según tu estructura de carpetas
import { PlusIcon } from '@heroicons/react/24/solid';

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

  const addProductsToCart = (product) => {
    context.setCartProducts([...context.cartProducts, product]);
    context.setCount(context.count + 1);
    context.openCheckoutSideMenu(); // Abre el menú lateral al añadir un producto
    console.log('CART: ', context.cartProducts);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response:', data);
        setProducts(data);
      })
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
                className="bg-yellow-500 text-white text-sm font-medium py-2 rounded mt-4 hover:bg-yellow-600 transition-colors flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation(); // Evita que se active el evento de abrir el modal
                  addProductsToCart(product);
                }}
              >
                <PlusIcon className="h-5 w-5" />
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleCloseModal} />
      )}
      {context.isCheckoutSideMenuOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col">
          {/* Encabezado del menú lateral */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Carrito de Compras</h2>
            <button
              onClick={context.closeCheckoutSideMenu}
              className="text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
          {/* Contenido desplazable del carrito */}
          <div className="flex-1 overflow-y-auto p-4">
            {context.cartProducts.length > 0 ? (
              <ul>
                {context.cartProducts.map((product, index) => (
                  <li
                    key={index}
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
            ) : (
              <p className="text-sm text-gray-600">Tu carrito está vacío.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
