import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css'
import './pages/Products/Products.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/products/Products';
import ProductDetails from './pages/ProductDetails';
import CartTap from './pages/CartTap';

function App() {


  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart/:id" element={<CartTap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
