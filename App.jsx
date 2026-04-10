import React, { useState } from 'react';
import ProductList from './ProductList';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="background-image">
      <h1>Paradise Nursery</h1>
      <button onClick={handleGetStartedClick}>Get Started</button>
      {showProductList && <ProductList />}
    </div>
  );
}
