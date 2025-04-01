import React, { useState } from "react";

const ShoppingCart = () => {
  // Initial state: empty cart
  const [cart, setCart] = useState([]);

  // Sample products
  const products = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 5 },
    { id: 3, name: "Cherry", price: 15 },
  ];

  // Function to add an item to the cart
  const addItem = (product) => {
    setCart([...cart, product]); // Adds product to the cart
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCart(cart.filter((item, index) => index !== id)); // Removes item by index
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* Product List */}
      <h3>Products:</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}

      {/* Cart Display */}
      <h3>Cart:</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} 
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}

      {/* Total Price */}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
