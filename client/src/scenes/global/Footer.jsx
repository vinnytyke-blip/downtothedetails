import { Box, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const breakPoint = useMediaQuery("(min-width:600px)");

  return (
    <div id='footer'>
      <Box
        bgcolor="#242424"
        color="#fff"
        padding="40px 10px"
        textAlign="center"
        display='flex'
        flexDirection={{ sm: "column" }}
      >
        <Box
          width={breakPoint ? "80%" : "100%"}
          display={{ sm: 'flex', md: 'flex' }}
          justifyContent={{ md: 'space-between', xs: 'center' }}
          marginX={{ sm: '5px', md: '15px' }}
          alignItems='center'
        >
          <Typography fontSize={{ xs: '20px', md: '28px' }} fontWeight='bold'>
            Down To The Details L.L.C.
          </Typography>
          <Box display='grid' gap='10px' textAlign='left' padding='10px 10px'>
            <Typography fontWeight='bold'>
              Contact Us
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon style={{ marginRight: '5px' }} />
              (520) 251-4949
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon style={{ marginRight: '5px' }} />
              down2detail602@gmail.com
            </Typography>
          </Box>
          <Box display='grid' gap='5px' textAlign='left' padding='10px 10px'>
            <Typography fontWeight='bold'>
              Location
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ marginRight: '5px' }} />
              2015 E Fifth St Tempe, AZ  85281 United States
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;