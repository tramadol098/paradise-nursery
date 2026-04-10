import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', price: 25, category: 'Indoor' },
  { id: 2, name: 'Monstera', price: 45, category: 'Indoor' },
  { id: 3, name: 'Peace Lily', price: 30, category: 'Indoor' },
  { id: 4, name: 'Fiddle Leaf Fig', price: 60, category: 'Indoor' },
  { id: 5, name: 'ZZ Plant', price: 35, category: 'Indoor' },
  { id: 6, name: 'Rubber Plant', price: 40, category: 'Indoor' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(plant => (
          <div key={plant.id} className="plant-card">
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
