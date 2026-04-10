import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const categories = {
  Indoor: [
    { id: 1, name: 'Peace Lily', price: 20, img: '/images/peace-lily.jpg' },
    { id: 2, name: 'Snake Plant', price: 18, img: '/images/snake-plant.jpg' },
    { id: 3, name: 'Spider Plant', price: 15, img: '/images/spider-plant.jpg' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 25, img: '/images/fig.jpg' },
    { id: 5, name: 'Pothos', price: 12, img: '/images/pothos.jpg' },
    { id: 6, name: 'ZZ Plant', price: 22, img: '/images/zz.jpg' }
  ],
  Outdoor: [
    { id: 7, name: 'Rose Bush', price: 15, img: '/images/rose.jpg' },
    { id: 8, name: 'Hibiscus', price: 18, img: '/images/hibiscus.jpg' },
    { id: 9, name: 'Bougainvillea', price: 20, img: '/images/bougainvillea.jpg' },
    { id: 10, name: 'Lavender', price: 14, img: '/images/lavender.jpg' },
    { id: 11, name: 'Sunflower', price: 10, img: '/images/sunflower.jpg' },
    { id: 12, name: 'Marigold', price: 8, img: '/images/marigold.jpg' }
  ],
  Succulents: [
    { id: 13, name: 'Aloe Vera', price: 10, img: '/images/aloe.jpg' },
    { id: 14, name: 'Echeveria', price: 12, img: '/images/echeveria.jpg' },
    { id: 15, name: 'Jade Plant', price: 15, img: '/images/jade.jpg' },
    { id: 16, name: 'Cactus', price: 9, img: '/images/cactus.jpg' },
    { id: 17, name: 'Haworthia', price: 11, img: '/images/haworthia.jpg' },
    { id: 18, name: 'Sedum', price: 13, img: '/images/sedum.jpg' }
  ]
};

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAdd = plant => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      <Navbar />
      {Object.keys(categories).map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="plant-grid">
            {categories[cat].map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.img} alt={plant.name} />
                <p>{plant.name} - ${plant.price}</p>
                <button
                  disabled={addedItems[plant.id]}
                  onClick={() => handleAdd(plant)}
                >
                  {addedItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
