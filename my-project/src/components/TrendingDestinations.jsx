
// import React, { useState } from 'react';
// import './TrendingDestination.css';
// import baliImg from '../assets/bali.jpg';
// import romaImg from '../assets/roma.jpg';
// import parisImg from '../assets/paris.jpg';
// import phuketImg from '../assets/phuket.jpg';
// import bangkokImg from '../assets/bangkok.jpg';
// import egyptImg from '../assets/egypt.jpg';
// import greecaImg from '../assets/greeca.jpg';
// import tokyoImg from '../assets/tokyo.jpg';


// const TrendingDestination = () => {
//   const allDestinations = [
//     { name: 'Bali', tours: '100+ Tours', img: baliImg },
//     { name: 'Roma', tours: '100+ Tours', img: romaImg },
//     { name: 'Phuket', tours: '100+ Tours', img: phuketImg },
    
//     { name: 'Paris', tours: '100+ Tours', img: parisImg },
//     { name: 'Bangkok', tours: '100+ Tours', img: bangkokImg },
//     { name: 'Egypt', tours: '100+ Tours', img: egyptImg },
//     { name: 'Greece', tours: '100+ Tours', img: greecaImg },
//     { name: 'Tokyo', tours: '100+ Tours', img: tokyoImg },


//   ];

//   const [visibleCount, setVisibleCount] = useState(5); 
//   const handleSeeMore = () => {
//     setVisibleCount((prevCount) => Math.min(prevCount + 2, allDestinations.length)); 
//   };

  // return (
  //   <section className="trending-destinations">
  //     <h2>Trending Destinations</h2>
  //     <div className="cards">
  //       {allDestinations.map((dest, index) => (
  //         <div className="card" key={index}>
  //           <img src={dest.img} alt={dest.name} />
  //           <h3>{dest.name}</h3>
  //           <p>{dest.tours}</p>
  //         </div>
  //       ))}
      {/* </div>
      <div className='see-more-container'>
        <button className='see-more'>See More</button>
    </div> */}

{/* </div>
      {visibleCount < allDestinations.length && ( // Show "See More" button only if there are more destinations
        <div className="see-more-container">
          <button className="see-more" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}

    </section>
  );
};

export default TrendingDestination; */}




import React, { useState } from 'react';
import './TrendingDestination.css';

import baliImg from '../assets/bali.jpg';
import romaImg from '../assets/roma.jpg';
import parisImg from '../assets/paris.jpg';
import phuketImg from '../assets/phuket.jpg';
import bangkokImg from '../assets/bangkok.jpg';
import tokyoImg from '../assets/tokyo.jpg';
import londonImg from '../assets/london.jpg';
import egyptImag from  '../assets/egypt.jpg';
import greecaImg from '../assets/greeca.jpg'

function TrendingDestinations() {
  const allDestinations = [
    { name: 'Bali', tours: '100+ Tours', img: baliImg },
    { name: 'Roma', tours: '100+ Tours', img: romaImg },
    { name: 'Paris', tours: '100+ Tours', img: parisImg },
    { name: 'Phuket', tours: '100+ Tours', img: phuketImg },
    { name: 'Bangkok', tours: '100+ Tours', img: bangkokImg },
    { name: 'Tokyo', tours: '200+ Tours', img: tokyoImg },
    { name: 'London', tours: '150+ Tours', img: londonImg },
    {name : 'Egypt', tours: '10 + Tours', img: egyptImag},
    {name: 'Greeca', tours: '10+ Tours', img: greecaImg},
  ];

  const [visibleCount, setVisibleCount] = useState(5); // Initial number of destinations visible
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, allDestinations.length)); // Show 2 more or limit to all
  };

  return (
    <section className="trending-destinations">
      <h2>Trending Destinations</h2>
      <div className="cards">
        {allDestinations.slice(0, visibleCount).map((dest, index) => (
          <div className="card" key={index}>
            <img src={dest.img} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.tours}</p>
          </div>
        ))}
      </div>
      {visibleCount < allDestinations.length && ( // Show "See More" button only if there are more destinations
        <div className="see-more-container">
          <button className="see-more" onClick={handleSeeMore}>
            See More
          </button>
        </div>
      )}
    </section>
  );
}

export default TrendingDestinations;
