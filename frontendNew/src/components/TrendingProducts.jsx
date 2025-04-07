
import React, { useState } from 'react';
import './TrendingProducts.css';
import './modal.css';
import productData from '../components/ProductData'

import iphoneImg from '../assets/iphone.png';
import androidImg from '../assets/android.png';
import coverImg from '../assets/cover.png';
import batteryImg from '../assets/battry.png';
import chargerImg from '../assets/charger2.png';
import airpodsImg from '../assets/headphon.png';
import screenProtectorImg from '../assets/suoja.png';

function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function TrendingProducts() {
  const allProducts = [
    { name: 'iPhones', img: iphoneImg },
    { name: 'Androides', img: androidImg },
    { name: 'Phone Covers', img: coverImg },
    { name: 'Batteries', img: batteryImg },
    { name: 'Chargers', img: chargerImg },
    { name: 'Headphones', img: airpodsImg },
    { name: 'Screen Protectors', img: screenProtectorImg },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 10;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const paginatedProducts =
    selectedCategory && productData[selectedCategory]
      ? productData[selectedCategory].slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : [];

  return (
    <section className="trending-products">
      {!selectedCategory ? (
        <div className="cards">
          {allProducts.map((item, index) => (
            <div className="card" key={index} onClick={() => handleCategoryClick(item.name)}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-section">
          <h3>{selectedCategory}</h3>
          <div className="product-list">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <button onClick={() => handleViewDetails(product)}>Buy Now</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({
              length: Math.ceil(productData[selectedCategory]?.length / itemsPerPage),
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

          <button className="back-button" onClick={() => setSelectedCategory(null)}>
            Back
          </button>
        </div>
      )}

      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default TrendingProducts;
