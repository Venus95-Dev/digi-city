// import React from "react";
// import "./AboutSection.css";
// import { useTranslation } from "react-i18next";

// const AboutSection = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="bg-white py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* تصویر */}
//         <div>
//           <img
//             src="/assets/about.jpg"
//             alt="About DigiCity"
//             className="rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* متن چندزبانه */}
//         <div className="text-gray-800">
//           <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
//           <p className="mb-4">{t("about.p1")}</p>
//           <p className="mb-4">{t("about.p2")}</p>
//           <p className="mb-4">{t("about.p3")}</p>
//           <ul className="list-disc pl-6 space-y-1">
//             <li>{t("about.list.one")}</li>
//             <li>{t("about.list.two")}</li>
//             <li>{t("about.list.three")}</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/about.png"
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-container">
        {/* تصویر */}
        <div className="about-image-wrapper">
          <img
            src={aboutImage} alt ="About DigiCity"/>

           
        </div>

        {/* متن */}
        <div className="about-text">
          <h2>{t("about.title")}</h2>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <ul>
            <li>{t("about.list.one")}</li>
            <li>{t("about.list.two")}</li>
            <li>{t("about.list.three")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

