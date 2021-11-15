import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import NavBar from '../Common/NavBar';

const Login = () => {

  const { formLogin, setUser, googleSignIn, successMsg } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();

  // Google Sign In 
  const handleGoogleSignIn = () => {
    googleSignIn(history, redirect_uri);
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
        history.push(redirect_uri);
      });

  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <h2 className="text-center mt-3">Please Login</h2>

      <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>

        <input type="email" className="form-control" {...register("email", { required: true })} />
        {errors.email && <span className="text-danger">Email field is required</span>}

        <input type="password" className="form-control" {...register("password", { required: true })} />
        {errors.password && <span className="text-danger">Password field is required</span>}

        <input type="submit" name="Login" />
      </form>
      <p>New User? <Link to="/register">Register Now</Link></p>

      <hr />

      <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>


    </div>
  );
};

export default Login;