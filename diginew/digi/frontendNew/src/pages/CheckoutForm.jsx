



// ✅ CheckoutPage.jsx – با انتخاب روش پرداخت
import React, { useState } from 'react';


import { useCart } from '../components/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const totalPrice = cartItems.reduce((total, item) => {
    const numeric = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + numeric;
  }, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.paymentMethod === 'card') {
      alert('Processing card payment...');
    } else {
      alert('Redirecting to Klarna...');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <div className="checkout-summary">
          <h4>Order Summary</h4>
          {cartItems.map((item, i) => (
            <div key={i} className="checkout-item">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <hr />
          <p className="total">Total: <strong>{totalPrice.toFixed(2)} €</strong></p>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h4>Billing Info</h4>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required></textarea>

          <h4>Payment Method</h4>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={form.paymentMethod === 'card'}
                onChange={handleChange}
              /> Pay with Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="klarna"
                checked={form.paymentMethod === 'klarna'}
                onChange={handleChange}
              /> Klarna (Pay later)
            </label>
          </div>

          {form.paymentMethod === 'card' && (
            <div className="card-form">
              <input type="text" placeholder="Card Number" required />
              <div className="card-row">
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
              <input type="text" placeholder="Cardholder Name" required />
            </div>
          )}

          <button type="submit">Confirm Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
