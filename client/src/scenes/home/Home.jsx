import About from "./About";
import MainCarousel from "./MainCarousel";
import Quote from "./Quote";
import Services from "./Services";
import { Box } from "@mui/material";
import Footer from "../global/Footer";
import Testimonials from "./Testimonials";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Box position='fixed' zIndex='1'>
        <MainCarousel apiKey={apiKey} />
      </Box>
      <Box position="relative" marginTop='100vh' zIndex={2} bgcolor='white'>
        <Testimonials />
        <Services />
        <Quote />
        <About />
        <Footer />
      </Box>
    </>
  );
}

export default Home;

