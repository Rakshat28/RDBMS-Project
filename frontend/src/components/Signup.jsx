/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

import Container from "./Container"

export default function Signup() {
  const [formData,setFormData] = useState({
    email: '',
    password: ''
  });
  const [error,setError] = useState(false);

  const [message, setMessage] = useState(''); // Added state to handle response messages

 const navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({...formData , [name]: value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/signup', formData);
      setMessage(response.data.message);
      navigate("/home");
      setError(false);
    } catch (error) {
      setError(true);
      setMessage(error.response?.data?.message || 'Something went wrong!');
    }
  };


    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className='m-3'>
        {error?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Sign up failed !</span>
</div> : null}
        </div>
        <div className='flex items-center justify-center h-screen'>
            <Container>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className='flex justify-center'>
                         <svg className='w-16 h-16' fill="#6c0bfe" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 420 420" xmlSpace="preserve" stroke="#6c0bfe"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M66.258,352.934l81.168-33.715l19.008-16.687c5.015-4.403,12.419-4.094,17.078,0.722l26.502,27.384l26.425-27.375 c4.653-4.823,12.069-5.148,17.09-0.729l19.008,16.687l81.167,33.711c9.174,3.801,15.127,18.146,19.092,35.545 C402.298,350.801,420,302.702,420,250.29c0-120.821-94.02-218.766-210-218.766C94.02,31.524,0,129.469,0,250.29 c0,52.401,17.694,100.494,47.188,138.164C51.146,371.069,57.092,356.737,66.258,352.934z M210.023,93.054 c53.787,0,81.229,28.425,81.229,83.202c0,123.167-81.229,119.737-81.229,119.737c-49.896,0.793-80.5-44.718-81.271-119.737 C128.221,121.48,157.365,93.054,210.023,93.054z"></path> </g> </g> </g> </g></svg>
                     </div>

                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up to create account
                    </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                           Set Password
                        </label>
                        
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign up
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Already have an account?
                        </label>
                        <div className="text-sm" onClick={(()=>navigate("/signin"))}>
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login
                            </a>
                        </div>
                        </div>
                    </form>
        
                    
                </div>
                </div>
            </Container>
        </div>
      </>
    )
  }
  