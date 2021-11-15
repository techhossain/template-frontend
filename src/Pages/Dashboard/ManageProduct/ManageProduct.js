import React from 'react';
import useProducts from '../../../Hooks/useProducts';

const ManageProduct = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
      })
  }

  return (
    <div className="container">
      <h2 className="my-5">Manage Products</h2>
      <ul className="list-group">
        {
          products.map(product => <li key={product._id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{product.title}</div>
            </div>
            <span className="bg-light">
              <button className="btn btn-warning mx-2">Update</button>
              <button className="btn btn-danger mx-2" onClick={() => { handleDelete(product._id) }}>Delete</button>
            </span>
          </li>)
        }
      </ul>






    </div>
  );
};

export default ManageProduct;