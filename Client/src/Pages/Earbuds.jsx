import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../Css/Earbuds.css';

const Earbuds = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('http://localhost:3000/products/?category=Earbuds');
      setProducts(response.data);
    };
    loadData();
  }, []);

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Category</h3>
        <hr />
        <ul>
          <li>Wireless Headset</li>
          <li>On-Ear Headset</li>
        </ul>
        <h3>Availability</h3>
        <hr />
        <ul>
          <li>In Stock</li>
          <li>Out of Stock</li>
        </ul>
        <h3>Price</h3>
        <hr />
        <div className="price-filter">
          <span>The highest price is Rs. 910.00</span>
          <input type="text" placeholder="From ₹" />
          <input type="text" placeholder="To ₹" />
          <button className="apply-button">Apply</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="hover-overlay">
                <Button variant="primary" className="rounded-pill px-3">
                  Add to Cart
                </Button>
                <Button variant="outline-dark" className="rounded-circle mx-2">
                  ❤️
                </Button>
                <Button variant="outline-dark" className="rounded-circle mx-2">
                  🔍
                </Button>
              </div>
            </div>
            <div className="product-info">
              <h5 className="fw-bold">{product.name}</h5>
              <p>{`Brand: ${product.brand}`}</p>
              <p>{`Category: ${product.category}`}</p>
              <p className="price">{`Price: Rs. ${product.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earbuds;
