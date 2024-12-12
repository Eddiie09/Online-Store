/**
 * This function calculates the total price of an order
 * @param {Array} products - CartProducts: Array of objects
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        sum += product.price * product.quantity; // Multiplicar el precio por la cantidad
    });
    return sum;
};

