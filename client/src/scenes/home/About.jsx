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
            >To treat everyone of our clients as a member of our community, to listen to their inputs/desires,
              and ensure our results reflect those expectations.
            </Typography>
            <Typography variant="h2" marginTop="20px" lineHeight='1.5' letterSpacing='0.1em'>
              Who Are We:
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
            >
              Down to the Details L.L.C. started out as a mobile detailing company which operated out of my apartment home in central
              Phoenix for a little over a year. Our first brick and mortar location was opened in August of 2023 and has been growing
              at a solid pace ever since.
            </Typography>
            <Typography
              // variant="h4" sx={{ marginTop: '20px', lineHeight: '1.5', letterSpacing: '0.1em' }}
              letterSpacing={'0.1em'}
              marginTop={'20px'}
            >
              Our shop specializes in in-depth automotive detailing. We have a heavy emphasis on "going the extra mile" for our clients
              by listening to their input regarding their vehicle's condition, and ensure our results reflect those expectations. We detail
              luxury vehicles, sports cars, classics, economy, work vehicles, fleet vehicles, motorcycles etc. Services include but are not
              limited too: two bucket hand wash/air-dry, wheels/rim cleaned + polished, tires dressed, clay-bar treatment, bug/tar removal,
              spot treatment, scratch treatment, polishing/buffing, headlight polishing, full interior vacuuming/detailing, interior scenting,
              steam cleaning, carpet and upholstery cleaning, seat cleaning, floor mats extracted and cleaned/shampooed, spot treatment,
              upholstery steam cleaning, vents/dash cleaning, steering wheel cleaning, center console steam cleaned, window cleaning.
              <span style={{ fontWeight: 'bold' }}> Appointments must be scheduled ahead of time.</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;