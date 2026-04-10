import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CartPage from './CartItem';
import AboutUs from './AboutUs';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page shows AboutUs */}
        <Route path="/" element={<AboutUs />} />

        {/* Product listing page */}
        <Route path="/products" element={<ProductList />} />

        {/* Cart page */}
        <Route path="/cart" element={<CartPage items={[]} />} />
      </Routes>
    </Router>
  );
}
