import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color">
      <div className="container">
        <Link className="navbar-brand" to="/">React Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link p-color" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-color" to="/products">Products</Link>
            </li>
          </ul>
          <ul className="list-unstyled navbar-nav">
            <li>
              <NavLink to="/cart/:id"><i class="fa-solid fa-cart-plus p-color w-50 p-3"></i></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;