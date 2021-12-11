import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';
import NavBar from '../Common/NavBar';

const Register = () => {
  const { formRegister, setUser, setError } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/dashboard';
  const navigate = useNavigate();
  console.log(redirect_uri);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {

    let { email, password, name } = data;
    formRegister(email, password, name, navigate);

  }

  const mystyle = {
    textAlign: "center !important"
  };

  return (

    <div className="container">
      <NavBar />
      <h2 className="text-center my-3">Registration</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form className="mx-auto card card-body p-5" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label class="form-label" style={mystyle}>Name</label>
              <input type="text" className="form-control" {...register("name", { required: true })} />
              {errors.name && <span className="text-danger">Please Enter a Name</span>}
            </div>
            <div class="mb-3">
              <label class="form-label" style={mystyle}>Email address</label>
              <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />

              {errors.email && <span className="text-danger">Please Enter a Valid Email Address</span>}
            </div>
            <div class="mb-3">
              <label class="form-label" style={mystyle}>Password</label>
              <input type="password" className="form-control" {...register("password", { required: true })} />

              {errors.password && <span className="text-danger">Please Enter a password which contain atlease 6 chracter long, one Uppercae, one Lowercase and one special character</span>}
            </div>

            <input className='btn btn-success' type="submit" />
          </form>
          <p className='my-2'>Already Registred? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;