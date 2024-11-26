
import React,{Suspense} from 'react';
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.jsx";
const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(()=> import("./pages/Login"));
const Home = React.lazy(()=>import("./pages/Home.jsx"))
import FourOFour from "./pages/FourOFour.jsx";
import Header from "./components/Header.jsx"
import Hospitals from './pages/Hospitals.jsx';
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
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path='*' element ={<FourOFour />} />
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
  const HidePath= ["/","/signup","/signin",'*'];
  const validRoutes = ["/", "/signup", "/signin", "/home"];
  const isInvalidRoute = !validRoutes.includes(location.pathname);
  const shouldHideHeader = HidePath.includes(location.pathname) || isInvalidRoute;
  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
    </>
  );
}

export default App
