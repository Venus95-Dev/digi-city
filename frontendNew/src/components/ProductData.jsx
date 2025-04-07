

import iphoneImg from '../assets/iphone.png';  // Importing images directly
import androidImg from '../assets/android.png';  // Importing images directly

const productData = {
  iPhone: [
    {
      id: 1,
      name: 'iPhone 12',
      description: 'The latest iPhone with amazing features',
      price: '$999',
      image: iphoneImg,  // Use imported image here
    },
    {
      id: 2,
      name: 'iPhone 13',
      description: 'The most advanced iPhone ever',
      price: '$1099',
      image: iphoneImg,  // Use imported image here
    },
  ],
  AndroidPhones: [
    {
      id: 1,
      name: 'Samsung Galaxy S21',
      description: 'High-end Android smartphone',
      price: '$899',
      image: androidImg,  // Use imported image here
    },
    {
      id: 2,
      name: 'Google Pixel 6',
      description: 'Pure Android experience',
      price: '$799',
      image: androidImg,  // Use imported image here
    },
  ],
  // Add more categories with products as needed
};

export default productData;
