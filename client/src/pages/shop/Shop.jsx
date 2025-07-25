import React, { useState } from 'react';
import './style/Shop.scss';
import { vimaanApi } from './api/api';

function Shop() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = vimaanApi.filter(vm =>
    vm.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop">
      {/* Sidebar Toggle Button */}
      <button
        className="shop__toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle menu"
      >
        <span className="menu-icon">☰</span>
      </button>

      {/* Mobile Sidebar */}
      <div className={`shop__sidebar-mobile ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Filters</h3>
          <button
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="sidebar-content">
          <div className="filter-section">
            <h4>Categories</h4>
            {/* Add category filters here */}
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            {/* Add price range slider here */}
          </div>
        </div>
      </div>

      <div className="shop__container">
        {/* Desktop Sidebar */}
        <aside className="shop__sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Categories</h4>
            {/* Add category filters here */}
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            {/* Add price range slider here */}
          </div>
        </aside>

        <main className="shop__main">
          <div className="shop__search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="shop__empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path d="M8 12h8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="shop__grid">
              {filteredProducts.map((vm, idx) => (
                <div className="shop__item" key={idx}>
                  <div className="product-badge">50% Off</div>
                  <div className="product-image">
                    <img src={vm?.img} alt={vm?.product_name} loading="lazy" />
                    <button className="quick-view">Quick View</button>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{vm?.product_name}</h3>
                    <div className="product-meta">
                      <span className="product-price">Price: {vm?.price} Rs</span>
                      <button className="add-to-cart_shop">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Shop;