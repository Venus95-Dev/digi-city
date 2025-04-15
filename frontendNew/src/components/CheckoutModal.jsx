import React from 'react';
import './CheckoutModal.css';  // Import your CSS styles

function CheckoutModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Checkout</h2>
        <form>
          {/* Customer Info */}
          <label>Name:</label>
          <input type="text" placeholder="Your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your email" required />

          <label>City:</label>
          <input type="text" placeholder="City" required />

          <label>Country:</label>
          <input type="text" placeholder="Country" required />

          <label>Post Code:</label>
          <input type="text" placeholder="Post code" required />

          {/* Payment Info */}
          <label>Payment Method:</label>
          <select required>
            <option value="">Select payment</option>
            <option value="klarna">Klarna</option>
            <option value="card">Credit/Debit Card</option>
          </select>

          <div className="card-fields">
            <label>Card Number:</label>
            <input type="text" placeholder="Card Number" required />

            <label>MM/YY:</label>
            <input type="text" placeholder="MM/YY" required />

            <label>CVC:</label>
            <input type="text" placeholder="CVC" required />
          </div>

          <button type="submit">Pay Now</button>
        </form>

        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default CheckoutModal;
