import About from "./About";
import MainCarousel from "./MainCarousel";
import Quote from "./Quote";
import Services from "./Services";
import Reviews from "./Reviews";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <MainCarousel />
      <Reviews apiKey={apiKey} />
      <Services />
      <Quote />
      <About />
    </>
  );
}

export default Home;

