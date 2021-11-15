import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import NavBar from '../../Common/NavBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';

const SingleProduct = (props) => {
  const { user } = useAuth();

  const { id } = useParams('id');
  const [product, setProduct] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
  }, []);


  const onSubmit = data => {

    axios.post('http://localhost:5000/orders', data)
      .then(function (response) {
        if (response.data.insertedId) {
          const msg = "Order Placed Successfully";
          setSuccessMsg(msg);
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <h2 className="my-5">Place Order</h2>

      <div>
        {
          (successMsg) ? successMsg : ''

        }
      </div>

      <div className="container mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={product?.image} className="img-fluid rounded-start" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>
              <p className="fw-bold m-0">Price: $ {product?.price}</p>
              <p className="card-text">{product?.description}</p>
            </div>
          </div>

          <div className="col-md-6" >

            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={user?.displayName} type="text" className="form-control" id="name"  {...register("name", { required: true })} />
                {errors.name && <span>Name field is required</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" value={user.email} className="form-control" id="email"  {...register("email", { required: true })} />
                {errors.email && <span>Email field is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="mobile"  {...register("mobile", { required: true })} />
                {errors.mobile && <span>Mobile field is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" id="address"  {...register("address", { required: true })}></textarea>
                {errors.address && <span>Address field is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="city" id="city" className="form-label">City</label>
                <select className="form-control"  {...register("city")}>
                  <option value="dhaka">Dhaka</option>
                  <option value="khulna">Khulna</option>
                  <option value="other">other</option>
                </select>
              </div>
              <input type="text" className="d-none" value={id} {...register("productId")} />
              <input type="text" className="d-none" value="Pending" {...register("status")} />
              <input type="text" className="d-none" value={product?.title} {...register("productTitle")} />

              <input className="btn btn-primary" type="submit" />
            </form>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;