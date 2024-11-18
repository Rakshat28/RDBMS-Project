import React from 'react';
import { Calendar, Users, Clipboard, Activity, Heart } from 'lucide-react';
import {useNavigate} from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600",
    secondary: "bg-white text-indigo-500 hover:bg-indigo-50",
    outline: "border-2 border-white text-white hover:bg-indigo-400",
    ghost: "text-white hover:bg-indigo-400"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};




const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-indigo-500 text-white relative overflow-hidden">
        <nav className="container mx-auto px-3 py-4 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <span className="text-2xl font-bold">HealthCare Plus</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-indigo-200">About</a>
            <div className="flex space-x-2">
              <Button variant="ghost" onClick={()=>navigate("/signin")}>
                Login
              </Button>
              <Button variant="secondary" onClick={()=>navigate("/signup")}>
                Sign up
              </Button>
            </div>
          </div>
          <Button variant="secondary" className="md:hidden">Log in</Button>
            
        </nav>

        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modern Healthcare Management Solution
            </h1>
            <p className="text-xl mb-8">
              Streamline your hospital operations with our comprehensive management system.
              Enhance patient care and improve efficiency.
            </p>


            
          </div>
          <div className="hidden md:block">
            <img
              src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo="
              alt="Medical Professional"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="https://media.istockphoto.com/id/1046447804/photo/in-the-hospital-sick-male-patient-sleeps-on-the-bed-heart-rate-monitor-equipment-is-on-his.jpg?s=612x612&w=0&k=20&c=okoIEyjs22DW0Vb2wCxHGemh2k_44wCo439Q2t2MYsw="
                alt="Healthcare Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="grid gap-6">
                {[
                  { icon: <Users className="h-8 w-8" />, title: "Patient Management", desc: "Comprehensive patient information management system" },
                  { icon: <Calendar className="h-8 w-8" />, title: "Hospital Management", desc: "Efficient scheduling and reminder system" },
                  { icon: <Clipboard className="h-8 w-8" />, title: "Electronic Records", desc: "Secure electronic health records management" },
                  { icon: <Activity className="h-8 w-8" />, title: "Real-time Analytics", desc: "Advanced analytics and reporting tools" }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-indigo-500">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default LandingPage;