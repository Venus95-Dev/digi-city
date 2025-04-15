import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="payment-container">
      <h2>💳 Payment</h2>

      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Credit/Debit Cards
        </label>

        <label>
          <input
            type="radio"
            value="klarna"
            checked={paymentMethod === "klarna"}
            onChange={() => setPaymentMethod("klarna")}
          />
          Klarna
          <img src="/klarna-logo.png" alt="Klarna" className="klarna-logo" />
        </label>
      </div>

      {paymentMethod === "card" && (
        <div className="card-details">
          <input type="text" placeholder="Card number" />
          <div className="row">
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV/CVC" />
          </div>
          <input type="text" placeholder="Cardholder name" />
        </div>
      )}

      {paymentMethod === "klarna" && (
        <div className="klarna-details">
          <p>You’ll be redirected to Klarna for secure checkout after placing your order.</p>
        </div>
      )}

      <div className="billing">
        <label>
          <input type="checkbox" defaultChecked />
          Same as delivery address
        </label>
      </div>

      <button className="pay-btn">Review & Place Order</button>
    </div>
  );
};

export default PaymentForm;
