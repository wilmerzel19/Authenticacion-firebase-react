import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { Link } from "react-router-dom";


export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);


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
      await signup(user.email, user.password);
      navigate("/");

    } catch (error) {
      setError(error.message);
      console.log(error.code);


    }
  }

  return (
    <div className="container">
    {error && <div className="alert alert-danger">{error}</div>}
    <h1 className="text-center mt-4 text-primary">Register</h1>
  
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 mt-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          className="form-control"
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
          className="form-control"
          type="password"
          name="password"
          id="password"
          placeholder="********"
          onChange={handleChange}
        />
      </div>
  
      <button className="btn btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  
    <p className="my-4 text-sm text-center">
      Already have an Account?
      <a href="/login" className="text-primary">Login</a>
    </p>
  </div>

  );
}
  







