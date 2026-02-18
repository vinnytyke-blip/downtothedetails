import { Typography, Box } from "@mui/material";
import { portrait } from "../../assets";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const isNonMobile = useMediaQuery("(min-width:1100px)");
  return (
    <div id='about'>
      <Box
        display={isNonMobile ? 'flex' : 'block'}
        marginX='auto'
        marginTop='50px'
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
        <Box width={isNonMobile ? '50%' : '100%'} alignItems='center' display='flex' padding={{ xs: '10px', md: '30px' }} >
          <Box>
            <Typography variant="h1" fontSize={['30px', '40px']}>Down to the Details: Professional Automotive Detailing</Typography>
            <Typography paddingTop={'5px'} paddingBottom={'5px'} letterSpacing={'0.1em'}>A clean vehicle, a clean image, and a clean lifestyle.</Typography>
            <Typography variant="h2" marginTop="20px" lineHeight='1.5' letterSpacing='0.1em'>
              Our Mission:
            </Typography>
            <Typography
              letterSpacing={'0.1em'}
            >
              We treat every client like family — delivering consistent, high-quality results with honesty, precision, and attention to detail every single time.
            </Typography>
            <Typography variant="h2" marginTop="20px" lineHeight='1.5' letterSpacing='0.1em'>
              Who Are We:
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
            >
              Down to the Details LLC is a fully mobile detailing company serving Surprise, Phoenix, Scottsdale, Tempe, Mesa, Glendale, Chandler, and the surrounding areas. We bring professional, shop-level detailing directly to your home — no drop-offs, no waiting rooms.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              We specialize in comprehensive automotive detailing for motorcycles, luxury vehicles, daily drivers, work trucks, fleet vehicles, and more.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              At Down to the Details LLC, we don’t rush jobs — we focus on results. Our goal is simple: deliver a detail that makes you proud to drive your vehicle.
              Owner-operated. Fully mobile. 75+ five-star reviews and counting. We come to you — access to water and electricity within 50 feet is required.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;
