import React, { useReducer } from "react";

// 🎯 Actions
const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
};

// 🧠 Reducer Logic
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case ACTIONS.REMOVE_ITEM: {
      return state
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }

    case ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

const products = [
  { id: 1, name: "Model S", price: 79999 },
  { id: 2, name: "Model 3", price: 39999 },
  { id: 3, name: "Model X", price: 89999 },
];

const CartApp = () => {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛒 Tesla Cart</h2>

      <div>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.name}</strong> - ${product.price}
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_ITEM, payload: product })
              }
              style={{ marginLeft: "10px" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <h3>🧾 Cart Items</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ marginBottom: "8px" }}>
            {item.name} x {item.quantity}
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.REMOVE_ITEM, payload: item })
              }
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button
          onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
          style={{
            marginTop: "15px",
            backgroundColor: "#e63946",
            color: "white",
            padding: "6px 12px",
            border: "none",
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartApp;
