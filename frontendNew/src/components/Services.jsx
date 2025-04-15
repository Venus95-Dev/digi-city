// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Services.css';
// import iphone from '../assets/korjaus.png';
// import android from '../assets/korjaus1.png';
// import laptop from '../assets/taplet1.png';

// const Services = () => {
//   return (
//     <section className="services" id="services">
//       <h2>Our Services</h2>
//       <p className="services-intro">
//         We provide expert repair services for iPhones, Android devices, tablets, and laptops — with fast turnaround and top quality.
//       </p>

//       <div className="services-list">
//         <div className="service-card iphone">
//           <div className="icon-wrapper">
//             <img src={iphone} alt="iPhone Repair" />
//           </div>
//           <h3>iPhone Repair</h3>
//           <p>
//             Screen repair, battery replacement, water damage fix, and more for all iPhone models.
//           </p>
//           <Link to="/iphone-repair-details" className="details-button">Select Your Mobile</Link>
//         </div>

//         <div className="service-card android">
//           <div className="icon-wrapper">
//             <img src={android} alt="Android Repair" />
//           </div>
//           <h3>Android Repair</h3>
//           <p>
//             We fix screens, software, batteries, and components for major Android brands.
//           </p>
//           <Link to="/android-repair-details" className="details-button">Select Your Mobile</Link>
//         </div>

//         <div className="service-card tablet">
//           <div className="icon-wrapper">
//             <img src={laptop} alt="Tablet & Laptop Repair" />
//           </div>
//           <h3>Tablet & Laptop Repair</h3>
//           <p>
//             Display issues, software problems, battery and hardware fixes for all devices.
//           </p>
//           <Link to="/tablet-laptop-repair" className="details-button">Contact Us</Link>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useTranslation } from 'react-i18next';
import iphone from '../assets/korjaus.png';
import android from '../assets/korjaus1.png';
import laptop from '../assets/taplet1.png';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services" id="services">
      <h2>{t('services.title')}</h2>
      <p className="services-intro">{t('services.intro')}</p>

      <div className="services-list">
        <div className="service-card iphone">
          <div className="icon-wrapper">
            <img src={iphone} alt="iPhone Repair" />
          </div>
          <h3>{t('services.iphone.title')}</h3>
          <p>{t('services.iphone.description')}</p>
          <Link to="/iphone-repair-details" className="details-button">
            {t('services.iphone.button')}
          </Link>
        </div>

        <div className="service-card android">
          <div className="icon-wrapper">
            <img src={android} alt="Android Repair" />
          </div>
          <h3>{t('services.android.title')}</h3>
          <p>{t('services.android.description')}</p>
          <Link to="/android-repair-details" className="details-button">
            {t('services.android.button')}
          </Link>
        </div>

        <div className="service-card tablet">
          <div className="icon-wrapper">
            <img src={laptop} alt="Tablet & Laptop Repair" />
          </div>
          <h3>{t('services.tablet.title')}</h3>
          <p>{t('services.tablet.description')}</p>
          <Link to="/tablet-laptop-repair" className="details-button">
            {t('services.tablet.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
