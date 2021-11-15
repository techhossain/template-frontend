import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Review = () => {

  const [successMsg, setSuccessMsg] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {

    axios.post('http://localhost:5000/review', data)
      .then(function (response) {
        if (response.data.insertedId) {
          const msg = "Review Added Successfully";
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
      <h2 className="my-5">Review</h2>
      <div>
        {
          (successMsg) ? successMsg : ''

        }
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name"  {...register("name", { required: true })} />
          {errors.name && <span>Name field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email"  {...register("email", { required: true })} />
          {errors.email && <span>Email field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea className="form-control" id="review"  {...register("review", { required: true })}></textarea>
          {errors.review && <span>Review field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (0 to 5)</label>
          <input className="form-control" id="rating"  {...register("rating", { required: true, pattern: /^[0-9]*$/, min: 1, max: 5 })} />
          {errors.rating && <span>Rating field is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default Review;