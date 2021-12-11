import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:5000/contact', data)
      .then(function (response) {
        if (response.data.insertedId) {
          setSuccessMsg('Added Successfully');
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <div>

      <div className="row">
        <h2 className="text-center my-5">CONTACT US</h2>

        <div className="col-md-6">
          <img className="my-5 border p-5 img-fluid" src="https://techhossain.github.io/tour-resources/image/contact.jpg" alt="contact" />
        </div>
        <div className="col-md-6">
          <form className="mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />

              {errors.email && <span className="text-danger">Please Enter a Valid Email Address</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile No</label>
              <input type="text" className="form-control" {...register("mobile")} />

              {errors.mobile && <span className="text-danger">Please Enter a Valid Mobile Number</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea rows="4" type="text" className="form-control" {...register("message")} />

              {errors.message && <span className="text-danger">Please Enter your message</span>}
            </div>

            <input id="contact" className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;