import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png';






export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/");

    } catch (error) {
      setError(error.message);
      console.log(error.code);


    }
  }


  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }

  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('Check your email to reset password')
    } catch (error) {
      setError(error.message);
    }
  };



  return (


    
<div className="container-sm ">
  {error && <div className="alert alert-danger">{error}</div>}

  <form onSubmit={handleSubmit} className="bg-white shadow rounded p-8 mt-3">

    <div className="mb-3">
    <img src={logo} alt="logo" className="mx-auto d-block w-14 h-13" />
        <p className="text-center text-green-600">Campamento Bet-el</p>
        <h1 className="text-center mt-4 text-primary">Login</h1>

      <label htmlFor="email" className="form-label">Email</label>
      <input
        className="form-control form-control-sm"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        className="form-control form-control-sm"
        type="password"
        name="password"
        id="password"
        placeholder="********"
        onChange={handleChange}
      />
    </div>
    <p className="my-3 text-sm">Don't have an Account <a href="/register">Register</a></p>

    <div className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm"
        type="submit"
      >
        Login
      </button>
      <a
        className="text-primary text-sm"
        href="#!"
        onClick={handleResetPassword}
      >
        Forgot Password?
      </a>
    </div>
  </form>

  <button onClick={handleGoogleSignIn} className="btn btn-light mt-3 w-100">Login with Google</button>
</div>

  );

}