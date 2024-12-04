import React from 'react';
import './styles.css';

const ProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="product-detail-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Cierra al hacer clic en el fondo
    >
      <div
        className="product-detail-card bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative"
        onClick={(e) => e.stopPropagation()} // Detiene la propagación para evitar cerrar al hacer clic dentro
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose} // Botón para cerrar
        >
          ✖
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-700 my-2">{product.description}</p>
        <p className="text-yellow-600 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
