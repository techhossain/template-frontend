import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // const onSubmit = data => console.log(data);

  const onSubmit = data => {

    axios.post('http://localhost:5000/add-new', data)
      .then(function (response) {
        if (response.data.insertedId) {
          const msg = "Added Successfully";
          setSuccessMsg(msg);
          reset();
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="my-5">Add a Product</h2>
      <div>
        {
          (successMsg) ? successMsg : ''

        }
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Product Title</label>
          <input type="text" className="form-control" id="title"  {...register("title", { required: true })} />
          {errors.title && <span>Title field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description</label>
          <textarea rows="4" className="form-control" id="description" {...register("description", { required: true })} ></textarea>
          {errors.description && <span>Description field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price ($)</label>
          <input type="text" className="form-control" id="price"  {...register("price", { required: true })} />
          {errors.price && <span>Price field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>

          <input type="text" className="form-control" {...register("image", { required: true })} />

          {errors.image && <span className="text-danger">Image URL is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" />
      </form>

    </div>
  );
};

export default AddProduct;