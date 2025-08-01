import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';

function CartTap() {
  const { id } = useParams();
console.log('Product ID:', id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

	useEffect(() => {

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger my-5">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="alert alert-warning my-5">
        Product not found
      </div>
    );
  }

	let count =0;
	const handelIncrementItem = () => { 
		count++
	};
		const handelDecrementItem = () => {
			count++
		 };
	const handelRemodeItem = () => { 
				removeEventListener(product)
			};


  return (
    <div className="container my-1">
      <div className="card mb-3 shadow-sm h-10 d-inline-block">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={product.image} 
              className="img-fluid rounded-start p-1 small" 
              alt={product.title} 
              style={{objectFit: 'contain', height: '300px'}}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title mb-4">{product.title}</h2>
              <p className="card-text fs-3 text-danger mb-4">{product.price}</p>
				   <div className="d-flex gap-5 justify-content-center ">
							<p className="fs-3 card-text m-0 p-0 px-2 py-2 rounded pointer"onClick={handelDecrementItem}>-</p>
							  <p className="fs-3 card-text m-0 p-0 px-2 py-2 rounded">{count}</p>
						  <p className="fs-3 card-text  p-0 px-2 py-2 rounded pointer" onClick={handelIncrementItem}>+</p>
						  </div>
              <p className="fs-5 mt-5" onClick={handelRemodeItem} ><i class="fa-solid fa-trash"></i></p>
						 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTap;