
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Paradise Nursery</h1>
      </Link>
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({itemCount})
        </Link>
      </div>
    </nav>
  );
}
