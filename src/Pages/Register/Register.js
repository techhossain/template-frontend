import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import NavBar from '../Common/NavBar';

const Register = () => {
  const { formRegister, setUser, setError } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/dashboard';
  const history = useHistory();
  console.log(redirect_uri);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {

    let { email, password, name } = data;
    formRegister(email, password, name, history);

  }

  return (
    <div className="container">
      <NavBar />
      <h2 className="text-center mt-3">Register</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>

        <input type="text" className="form-control" {...register("name", { required: true })} />

        {errors.name && <span className="text-danger">Please Enter a Name</span>}

        <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />

        {errors.email && <span className="text-danger">Please Enter a Valid Email Address</span>}

        <input type="password" className="form-control" {...register("password", { required: true })} />

        {errors.password && <span className="text-danger">Please Enter a password which contain atlease 6 chracter long, one Uppercae, one Lowercase and one special character</span>}

        <input type="submit" />
      </form>
      <p>Already Registred? <Link to="/login">Login</Link></p>
      <hr />
    </div>
  );
};

export default Register;