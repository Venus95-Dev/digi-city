
import React, { useState } from 'react';
import './TrendingDestination.css';
import './modal.css';  // Import modal styles

// Example image imports
import baliImg from '../assets/bali.jpg';
import romaImg from '../assets/roma.jpg';
import parisImg from '../assets/paris.jpg';
import phuketImg from '../assets/phuket.jpg';
import tokyoImg from '../assets/tokyo.jpg';
import londonImg from '../assets/london.jpg';
import egyptImag from  '../assets/egypt.jpg';
import greecaImg from  '../assets/greeca.jpg';
import toursData from './toursData';

function TrendingDestinations() {
  const allDestinations = [
    { name: 'Bali', tours: '10 Tours', img: baliImg },
    { name: 'Roma', tours: '8 Tours', img: romaImg },
    { name: 'Paris', tours: '7 Tours', img: parisImg },
    { name: 'Thailand', tours: '11 Tours', img: phuketImg },
    { name: 'Tokyo', tours: '7 Tours', img: tokyoImg },
    { name: 'London', tours: '11 Tours', img: londonImg },
    { name: 'Egypt', tours: '10 Tours', img: egyptImag },
    { name: 'Greece', tours: '10 Tours', img: greecaImg },
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // New state for form visibility

  const itemsPerPage = 10;

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setCurrentPage(1); 
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, allDestinations.length));
  };

  const handleViewDetails = (tour) => {
    setSelectedTour(tour); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here (you can save the data or show a success message)
  };

  const paginatedTours =
    selectedDestination && toursData[selectedDestination]
      ? toursData[selectedDestination].slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : [];

  return (
    <section className="trending-destinations">
      <h2>Destinations</h2>

      {!selectedDestination ? (
        <>
          <div className="cards">
            {allDestinations.slice(0, visibleCount).map((dest, index) => (
              <div className="card" key={index} onClick={() => handleDestinationClick(dest.name)}>
                <img src={dest.img} alt={dest.name} />
                <h3>{dest.name}</h3>
                <p>{dest.tours}</p>
              </div>
            ))}
          </div>
          {visibleCount < allDestinations.length && (
            <div className="see-more-container">
              <button className="see-more" onClick={handleSeeMore}>
                See More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="tours-section">
          <h3>Tours in {selectedDestination}</h3>
          <div className="tours-list">
            {paginatedTours.map((tour) => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.name} />
                <h4>{tour.name}</h4>
                <p>{tour.description}</p>
                <p>Duration: {tour.duration}</p>
                <p>Price: {tour.price}</p>
                <button onClick={() => handleViewDetails(tour)}>Book Now</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({
              length: Math.ceil(toursData[selectedDestination]?.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button className="back-button" onClick={() => setSelectedDestination(null)}>
            Back to Destinations
          </button>
        </div>
      )}

      {isModalOpen && selectedTour && (
        <div className="booking-modal">
          <div className="booking-form-container">
            <form onSubmit={handleSubmit}>
              <h2>Book Your Tour</h2>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Date:
                <input type="date" name="date" required />
              </label>
              <label>
                Number of Guests:
                <input type="number" name="guests" min="1" required />
              </label>
              <label>
                Duration:
                <input type="number" name="duration" min="1" required placeholder="Enter duration in days"/>
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCloseModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default TrendingDestinations;


