// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">Sab<sub >store</sub></div>
        
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
            <h2>How to buy on Jiji?</h2>
            <p>Check out the step-by-step guide</p>
          </div>
          <div className="sell-banner">
            <h2>Got something to sell?</h2>
            <p>Post an advert for free!</p>
          </div>
        </section>
        <section className="categories">
          <div className="category">
            <h3>Vehicles</h3>
            <p>10,979 ads</p>
          </div>
          <div className="category">
            <h3>Property</h3>
            <p>13,279 ads</p>
          </div>
          <div className="category">
            <h3>Mobile Phones & Tablets</h3>
            <p>20,201 ads</p>
          </div>
          <div className="category">
            <h3>Electronics</h3>
            <p>121,558 ads</p>
          </div>
          <div className="category">
            <h3>Home, Furniture & Appliances</h3>
            <p>31,806 ads</p>
          </div>
          <div className="category">
            <h3>Health & Beauty</h3>
            <p>23,871 ads</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
