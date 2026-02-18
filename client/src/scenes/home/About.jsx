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
              We treat every client as a member of our community, listening to their desires to ensure our results meet their expectations.
            </Typography>
            <Typography variant="h2" marginTop="20px" lineHeight='1.5' letterSpacing='0.1em'>
              Who Are We:
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
            >
              Down to the Details LLC is a fully mobile detailing service built on convenience and top-tier results. We proudly serve Phoenix, Scottsdale, Tempe, Mesa, Surprise, Glendale, Chandler, and the greater Phoenix metro area — bringing a shop-level detail right to your driveway.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              We specialize in comprehensive automotive detailing, always going the extra mile to meet our clients' needs. Our expertise covers a wide range of vehicles, including luxury cars, sports cars, classics, economy vehicles, work trucks, fleet vehicles, motorcycles, and more.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              At Down to the Details LLC, we are committed to providing top-notch service and ensuring every vehicle we touch looks its absolute best.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;
