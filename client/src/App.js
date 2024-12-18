import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import MainCarousel from "./scenes/home/MainCarousel";
import Testimonials from "./scenes/home/Testimonials";
import Services from "./scenes/home/Services";
import Quote from "./scenes/home/Quote";
import About from "./scenes/home/About";
import NavBar from './scenes/global/Navbar';
import Footer from "./scenes/global/Footer";
import Threestep from "./scenes/home/Threestep";
import Phonehero from "./scenes/home/Phonehero";
import { Contact } from "./scenes/home/Contact";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isPhoneView = useMediaQuery('(max-width:650px)');


  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Box position='fixed' zIndex='1'>
          {isPhoneView ? <Phonehero /> : <MainCarousel />}
        </Box>
        <Box position="relative" marginTop='100vh' zIndex={2} bgcolor='white'>
          <Threestep />
          <Services />
          <Quote />
          <About />
          <Testimonials />
          {/* <Contact /> */}
          <Footer />
        </Box>
      </BrowserRouter>
    </div >
  );
}

export default App;
