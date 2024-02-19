import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import MainCarousel from "./scenes/home/MainCarousel";
import Testimonials from "./scenes/home/Testimonials";
import Services from "./scenes/home/Services";
import Quote from "./scenes/home/Quote";
import About from "./scenes/home/About";
import NavBar from './scenes/global/Navbar';
import Footer from "./scenes/global/Footer";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Box position='fixed' zIndex='1'>
          <MainCarousel />
        </Box>
        <Box position="relative" marginTop='100vh' zIndex={2} bgcolor='white'>
          {window.innerWidth <= 600 ? (
            <>
              <Services />
              <Quote />
              <About />
              <Testimonials />
              <Footer />
            </>
          ) : (
            <>
              <Testimonials />
              <Services />
              <Quote />
              <About />
              <Footer />
            </>
          )}
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
