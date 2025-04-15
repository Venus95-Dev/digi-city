import React, { useState } from 'react';
import './TrendingProducts.css';
import { useCart } from '../components/CartContext';
import { productData } from './productData';

import coverImg from '../assets/cover.png';
import CarBracketsImg from '../assets/CarBrackets.jpg';
import chargerImg from '../assets/charger2.png';
import airpodsImg from '../assets/headphon.png';
import screenProtectorImg from '../assets/suoja.png';
import CheckoutModal from './CheckoutModal';

function TrendingProducts() {
  const { addToCart, clearCart } = useCart();

  const allProducts = [
    { name: 'Phone Covers', img: coverImg },
    { name: 'Collections', img: CarBracketsImg },
    { name: 'Chargers', img: chargerImg },
    { name: 'Headphones', img: airpodsImg },
    { name: 'Screen Protectors', img: screenProtectorImg },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantityMap, setQuantityMap] = useState({});
  const itemsPerPage = 10;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleQuantityChange = (productId, value) => {
    setQuantityMap((prev) => ({
      ...prev,
      [productId]: parseInt(value, 10),
    }));
  };

  const handleInstantCheckout = (product) => {
    const quantity = quantityMap[product.id] || 1;
    clearCart();
    addToCart({ ...product, quantity });
    setSelectedProduct(product);
    setCheckoutOpen(true);
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
            <div className={`card card-${index}`} key={index} onClick={() => handleCategoryClick(item.name)}>
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
                <p>Price: €{product.price}</p>

                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={quantityMap[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  className="quantity-input"
                />

                <button onClick={() => handleInstantCheckout(product)}>Buy Now 💳</button>
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

      {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
    </section>
  );
}

export default TrendingProducts;
