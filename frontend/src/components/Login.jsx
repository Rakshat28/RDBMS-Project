
import Container from "./Container"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import React,{useState} from "react"

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error,setError] = useState(false);
 const [message, setMessage] = useState(""); // For error/success messages
  const navigate = useNavigate(); // For navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", formData); // Adjust the URL if needed
      const { token } = response.data;

      // Save token to localStorage (optional)
      localStorage.setItem("authToken", token);
      console.log('Token saved:', localStorage.getItem('authToken'));

      setMessage("Login successful!");
      navigate("/home");
    } catch (error) {
      // Handle errors
      setError(true);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message); // Show error message from server
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

    return (
      <>
        <div className='m-3'>
        {error?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Log in failed !</span> Invalid Credentials.
</div> : null}
        </div>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className='flex items-center justify-center h-screen'>
            <Container>
                
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className='flex justify-center'>
                         <svg className='w-16 h-16' fill="#6c0bfe" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 420 420" xmlSpace="preserve" stroke="#6c0bfe"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M66.258,352.934l81.168-33.715l19.008-16.687c5.015-4.403,12.419-4.094,17.078,0.722l26.502,27.384l26.425-27.375 c4.653-4.823,12.069-5.148,17.09-0.729l19.008,16.687l81.167,33.711c9.174,3.801,15.127,18.146,19.092,35.545 C402.298,350.801,420,302.702,420,250.29c0-120.821-94.02-218.766-210-218.766C94.02,31.524,0,129.469,0,250.29 c0,52.401,17.694,100.494,47.188,138.164C51.146,371.069,57.092,356.737,66.258,352.934z M210.023,93.054 c53.787,0,81.229,28.425,81.229,83.202c0,123.167-81.229,119.737-81.229,119.737c-49.896,0.793-80.5-44.718-81.271-119.737 C128.221,121.48,157.365,93.054,210.023,93.054z"></path> </g> </g> </g> </g></svg>
                     </div>

                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Log in to your account
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
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                            </a>
                        </div>
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
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign in
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Don't have an account?
                        </label>
                        <div className="text-sm" onClick={()=>navigate("/signup")}>
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign up
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
  