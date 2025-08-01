import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="jumbotron p-4 p-md-5 rounded bg-light">
      <div className="container">
        <h1 className="display-4 mb-3">Welcome to React Store!</h1>
        <p className="lead">
          This is a simple React application built with Vite, Bootstrap, and Fake Store API.
        </p>
        <hr className="my-4" />
        <p className="mb-4">
         
        </p>
        <Link to="/products" className="btn main-color p-color btn-lg">
          View Products
        </Link>
      </div>
    </div>
  );
}

export default Home;