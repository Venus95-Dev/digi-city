


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CheckoutForm.css";

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { model, service, price } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameAddress, setSameAddress] = useState(true);

  const [billingAddress, setBillingAddress] = useState({
    street: "",
    city: "",
    postal: "",
    country: ""
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = {
        model,
        service,
        price
      };

    // اگر بعداً خواستی وصل شی به stripe اینجا آماده‌ست
    if (paymentMethod === "card") {
      navigate("/payment-success/stripe");
    } else {
      navigate("/payment-success/klarna");
    }
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Booking Summary</h2>
        <div className="summary-box">
          <p><strong>Model:</strong> {model}</p>
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Total Price:</strong> €{price}</p>
        </div>

        <h2>Delivery Method</h2>
        <div className="delivery-info">
          <strong>Postnord</strong> <span>3–5 business days</span>
        </div>

        <h2>Payment</h2>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit / Debit Card
          </label>
          <label className="klarna-option">
            <input
              type="radio"
              name="paymentMethod"
              value="klarna"
              checked={paymentMethod === "klarna"}
              onChange={() => setPaymentMethod("klarna")}
            />
            Klarna
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Klarna_Payment_Badge.svg"
              alt="Klarna"
              height="20"
            />
          </label>
        </div>

        {paymentMethod === "card" && (
          <div className="card-info">
            <input type="text" placeholder="Card number" required />
            <div className="row">
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVV/CVC" required />
            </div>
            <input type="text" placeholder="Cardholder name" required />
          </div>
        )}

        <h2>Billing Address</h2>
        <div className="billing-address">
          <label>
            <input
              type="checkbox"
              checked={sameAddress}
              onChange={() => setSameAddress(!sameAddress)}
            />
            Same as delivery address
          </label>
        </div>

        {!sameAddress && (
          <div className="billing-fields">
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={billingAddress.street}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingAddress.city}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="postal"
              placeholder="Postal Code"
              value={billingAddress.postal}
              onChange={handleBillingChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingAddress.country}
              onChange={handleBillingChange}
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Review & Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
