



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./RepairDetailCard.css";

const RepairDetailCard = ({ model, prices }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      type: "screen",
      icon: "📱",
      title: `${model} ${t("repair.screenTitle")}`,
      price: `${prices.screenRepair}`,
      description: t("repair.screenDesc"),
      warranty: "12 months",
      time: "1-3 Hours"
    },
    {
      type: "battery",
      icon: "🔋",
      title: `${model} ${t("repair.batteryTitle")}`,
      price: `${prices.batteryReplacement}`,
      description: t("repair.batteryDesc"),
      warranty: "12 months",
      time: "1-3 Hours"
    },
    {
      type: "back",
      icon: "🪞",
      title: `${model} ${t("repair.backTitle")}`,
      price: `${prices.backRepair}`,
      description: t("repair.backDesc"),
      warranty: "12 months",
      time: "1-3 Hours"
    }
  ];

  const [selected, setSelected] = useState(services[0]);

  const handleBook = () => {
    navigate("/checkout", {
      state: {
        model,
        service: selected.type,
        price: selected.price
      }
    });
  };

  return (
    <div className="repair-detail-container">
      <div className="tab-buttons">
        {services.map((service) => (
          <button
            key={service.type}
            className={`tab-btn ${selected.type === service.type ? "active" : ""}`}
            onClick={() => setSelected(service)}
          >
            <span>{service.icon}</span> {t(`repair.${service.type}`)}
          </button>
        ))}
      </div>

      <div className="detail-card">
        <div className="left">
          <div className="icon">{selected.icon}</div>
          <div className="price">€{selected.price}</div>
          <button className="book-btn" onClick={handleBook}>
            {t("repair.bookBtn")}
          </button>
        </div>
        <div className="right">
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <p><strong>{t("repair.warranty")}:</strong> <span className="highlight">{selected.warranty}</span></p>
          <p><strong>{t("repair.time")}:</strong> <span className="highlight">{selected.time}</span></p>
        </div>
      </div>
    </div>
  );
};

export default RepairDetailCard;
