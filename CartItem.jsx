import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './cartSlice';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <p>{item.name} - ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}

export default function CartPage({ items }) {
  const navigate = useNavigate();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <h2>Total Cart Amount: ${total}</h2>
      <button>Checkout (Coming Soon)</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
    </div>
  );
}
