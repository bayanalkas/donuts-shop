import React, { useState, useEffect } from 'react';
import DonutList from './DonutList';
import './styles.css'; 
import { Link } from 'react-router-dom';
import donutsImage from './donuts.jpg';


function HomePage() {
  return (
    <main className="HomePage">
      <header>
        <div><h1>Welcome to the Donut Shop</h1></div>
      </header>
      <section>
        <div className="image-container">
        <img src={donutsImage} alt="donuts" />
        </div>
        <DonutList />
      </section>
    </main>
  );
}

<Link to="/admin.html" className="admin-link">Admin Page</Link>

export default HomePage;
