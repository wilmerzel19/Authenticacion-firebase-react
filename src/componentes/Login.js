import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
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



  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <h1 className="text-center p-4 text-blue-700 text-2xl ">Login</h1>


      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded
 px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-fold
      mb-2" >Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>


        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handleChange}
          />
           </div>
           
          <button className="bg-blue-800 hover:bg-blue-400 text-white
      font-bold  py-2  px-4 rounded focus:outline-none focus:shadow-outline" >Login</button>
       
      </form>

      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-300 text-black       shadow-md rounded border-2 border-gray-400 py-2 px-4 w-full" >Login with Google</button>

    </div>
  );
}