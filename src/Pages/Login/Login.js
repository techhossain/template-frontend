import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';
import NavBar from '../Common/NavBar';

const Login = () => {

  const { formLogin, setUser, googleSignIn, successMsg } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const navigate = useNavigate();

  // Google Sign In 
  const handleGoogleSignIn = () => {
    googleSignIn(navigate, redirect_uri);
  }


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // let { email, password } = data;
    // formLogin(email, password);

    // console.log(email, password)
    let { email, password } = data;

    formLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(redirect_uri);
      });

  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <h2 className="text-center my-3">Please Login</h2>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form className="mx-auto card card-body p-5" onSubmit={handleSubmit(onSubmit)}>

            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input type="email" className="form-control" {...register("email", { required: true })} />
              {errors.email && <span className="text-danger">Email field is required</span>}
            </div>

            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" className="form-control" {...register("password", { required: true })} />
              {errors.password && <span className="text-danger">Password field is required</span>}
            </div>
            <input className='btn btn-success' type="submit" name="Login" />
          </form>

          <p className='my-2'>New User? <Link to="/register">Register Now</Link></p>
          <hr />
          <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>

        </div>
      </div>




    </div>
  );
};

export default Login;