// import React from 'react';
// import './AppoinmentList.css'
// const Booking = () => {
//   // ✅ Define the appointments list
//   const appointments = [
//     { id: 1, service: "Phone Repair", duration: "1 hr", price: "Price Negotiable" },
//     { id: 2, service: "Battery Change", duration: "1 hr", price: "Price Negotiable" },
//     { id: 3, service: "Passport Photography", duration: "15 min", price: "15€ VAT Included" },
//     { id: 4, service: "Inspection", duration: "15 min", price: "20€" },
//   ];

//   return (
//     <div>
//       <h2>Appointment List</h2>
//       <ul>
//         {appointments.map((appointment) => (
//           <li key={appointment.id}>
//             <strong>{appointment.service}</strong> - {appointment.duration} - {appointment.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Booking;

import React from 'react';
import './AppoinmentList.css';

const appointments = [
  { id: 1, name: "Phone Repair", time: "1 hr", price: "Price Negotiable" },
  { id: 2, name: "Battery Change", time: "1 hr", price: "Price Negotiable" },
  { id: 3, name: "Inspection", time: "15 min", price: "20€" },
  { id: 4, name: "Passport Photography", time: "15 min", price: "15€ VAT Included" },
];

const Booking = () => {
  return (
    <div className="appointment-container">
      <h2 className="appointment-header">Book An Appointment</h2>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="appointment-item">
            <div className="appointment-info">
              <div>
                <h3>{appointment.name}</h3>
                <p>{appointment.time} - {appointment.price}</p>
              </div>
            </div>
            <button className="book-now-btn">Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;

