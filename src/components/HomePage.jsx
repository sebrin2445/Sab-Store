// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">Sab<sub>store</sub></div>
        <div className="user-actions">
          <button className="sell-button">SELL</button>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-text">
            <h1>Find anything in <span>All Ethiopia</span></h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="I am looking for..." />
          </div>
        </section>
        <section className="ad-section">
          <div className="ad-banner">
            <h2>How to buy on Sabstore?</h2>
            <p>Check out the step-by-step guide</p>
          </div>
          <div className="sell-banner">
            <h2>Got something to sell?</h2>
            <p>Post an advert for free!</p>
          </div>
        </section>
        <section className="categories">
          <Link to="/vehicles" className="category vehicles">
            <h3>Vehicles</h3>
            <p>10,979 ads</p>
          </Link>
          <Link to="/property" className="category property">
            <h3>Property</h3>
            <p>13,279 ads</p>
          </Link>
          <Link to="/mobile-phones" className="category mobile-phones">
            <h3>Mobile Phones & Tablets</h3>
            <p>20,201 ads</p>
          </Link>
          <Link to="/electronics" className="category electronics">
            <h3>Electronics</h3>
            <p>121,558 ads</p>
          </Link>
          <Link to="/home-furniture" className="category home-furniture">
            <h3>Home, Furniture & Appliances</h3>
            <p>31,806 ads</p>
          </Link>
          <Link to="/health-beauty" className="category health-beauty">
            <h3>Health & Beauty</h3>
            <p>23,871 ads</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
