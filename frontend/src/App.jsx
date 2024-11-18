
import React,{Suspense} from 'react';
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
const Signup = React.lazy(() => import("./components/Signup"));
const Login = React.lazy(()=> import("./components/Login"));
const Home = React.lazy(()=>import("./components/Home.jsx"))
import Header from "./components/Header.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

function Layout({ children }) {
  const location = useLocation();

  // Hide header on the Landing Page
  const HidePath= ["/","/signup","/signin"];


  return (
    <>
      {!HidePath.includes(location.pathname) && <Header />}
      {children}
    </>
  );
}

export default App
