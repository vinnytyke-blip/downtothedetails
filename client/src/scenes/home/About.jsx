import { Typography, Box } from "@mui/material";
import { portrait } from "../../assets";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const isNonMobile = useMediaQuery("(min-width:800px)");
  return (
    <div id='about'>
      <Box
        display={ isNonMobile ? 'flex' : 'block' }
        marginX='auto'
        alignItems='center'
        width='100%'
        height='100%'
      >
        <Box 
          width={isNonMobile ? '50%' : '100%'} 
          maxHeight='1000px'
          overflow='hidden'
        >
          <img
            src={portrait}
            alt="satisfaction"
            loading="lazy"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
        <Box width={{sm: '100%', md: '50%'}} alignItems='center' display='flex' padding={{ xs: '10px', md: '30px' }} >
          <Box>
            <Typography variant="h1" fontSize={['42px', '60px']}>More About Us</Typography>
            <Typography variant="h2" marginTop="20px" lineHeight='1.5' letterSpacing='0.1em'>
              Our Story
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}>
              Down to the Details L.L.C. was a business idea that came into fruition after graduating college, by understanding
              a crucial aspect of human nature: we are all judged by others depending on our appearance, the vehicles we drive,
              and the lifestyles we live etc. Although we all want to come across as clean, organized, and well presentable, sometimes
              life gets too busy. This is where Down to the Details has found its vision and purpose. Our team understands your vehicle is
              more than just a car. Our team understands we are working on an aspect that makes up your image as a whole. Our team will listen
              to your input/concerns and ensure our results reflect those expectations.
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}>
              Down to the Details was created to take some of that responsibility off your shoulders, bare it as our own, then allow
              you to feel all the positive effects that follow. A clean vehicle, a clean image, and a clean lifestyle.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;