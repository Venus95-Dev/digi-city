import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div style={{ padding: '3rem' }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>
              <strong>{item.name}</strong> – {item.price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={clearCart} style={{ marginTop: '1rem' }}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
