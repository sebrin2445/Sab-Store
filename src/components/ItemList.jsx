import React from 'react';
import './ItemList.css';

const items = [
  { id: 1, category: 'vehicles', name: 'Pad Kit, Disc Brake, Front', price: 7500, location: 'Addis Ababa, Addis Ketema', brand: 'Brand New', image: '/path/to/image1.jpg' },
  { id: 2, category: 'vehicles', name: 'Pad Kit, Disc Brake, Front', price: 9000, location: 'Addis Ababa, Addis Ketema', brand: 'Brand New', image: '/path/to/image2.jpg' },
  { id: 3, category: 'vehicles', name: 'Pad Kit, Disc Brake, Front', price: 6500, location: 'Addis Ababa, Addis Ketema', brand: 'Brand New', image: '/path/to/image3.jpg' },
  { id: 4, category: 'property', name: 'House for Sale', price: 1500000, location: 'Addis Ababa, Bole', brand: 'Brand New', image: '/path/to/image4.jpg' },
  { id: 5, category: 'mobile-phones', name: 'iPhone 12', price: 35000, location: 'Addis Ababa, Bole', brand: 'Brand New', image: '/path/to/image5.jpg' },
  { id: 6, category: 'electronics', name: 'Sony TV', price: 15000, location: 'Addis Ababa, Bole', brand: 'Brand New', image: '/path/to/image6.jpg' },
  { id: 7, category: 'furniture', name: 'Sofa Set', price: 20000, location: 'Addis Ababa, Bole', brand: 'Brand New', image: '/path/to/image7.jpg' },
  { id: 8, category: 'health-beauty', name: 'Skin Care Kit', price: 5000, location: 'Addis Ababa, Bole', brand: 'Brand New', image: '/path/to/image8.jpg' },
  // Add more items with different categories
];

const ItemList = ({ category }) => {
  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className="item-list">
      {filteredItems.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} className="item-image" />
          <h3>{item.name}</h3>
          <p>{item.location}</p>
          <p>ETB {item.price}</p>
          <p>{item.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
