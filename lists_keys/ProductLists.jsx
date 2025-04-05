import React from "react";

function ProductLists() {
  const products = [
    { id: 1, name: "Laptop", price: 1200, imageUrl: "/images/laptop.jpg" },
    {
      id: 2,
      name: "Headphones",
      price: 150,
      imageUrl: "/images/headphones.jpg",
    },
    { id: 3, name: "Keyboard", price: 75, imageUrl: "/images/keyboard.jpg" },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductLists;
