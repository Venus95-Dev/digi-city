



import React, { useState } from "react";
import "./BookingFormModal.css";
import { useTranslation } from "react-i18next";

const BookingFormModal = ({ service, onClose }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date || !form.time) {
      alert(t("bookingForm.alertFillAll"));
      return;
    }
    alert(`${t("bookingForm.confirmed")} ${service}!`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{t("bookingForm.book")}: {service}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder={t("bookingForm.name")} value={form.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder={t("bookingForm.phone")} value={form.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder={t("bookingForm.email")} value={form.email} onChange={handleChange} required />
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <input type="time" name="time" value={form.time} onChange={handleChange} required min="10:00" max="19:00" />
          <button type="submit">{t("bookingForm.confirm")}</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖ {t("bookingForm.close")}</button>
      </div>
    </div>
  );
};

export default BookingFormModal;
