import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>${item.price} × {item.quantity}</p>
      
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
