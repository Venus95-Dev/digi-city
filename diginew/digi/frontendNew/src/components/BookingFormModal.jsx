import React, { useState } from "react";
import "./BookingFormModal.css";

const BookingFormModal = ({ service, onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "",email: "", date: "", time: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date || !form.time) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Booking confirmed for ${service}!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Book: {service}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <input type="time" name="time" value={form.time} onChange={handleChange} required min="10:00" max="19:00" />
          <button type="submit">Confirm</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖ Close</button>
      </div>
    </div>
  );
};

export default BookingFormModal;
