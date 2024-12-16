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
              Down to the Details LLC began as a mobile detailing company in central Phoenix. In August 2023, we opened our first brick-and-mortar location and have been growing steadily since.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              We specialize in comprehensive automotive detailing, going the extra mile to meet clients' needs. We detail luxury cars, sports cars, classics, economy, work, fleet vehicles, motorcycles, and more.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;