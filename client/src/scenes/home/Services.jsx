import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { interiorServices, exteriorServices } from "../../assets";


const Services = () => {
  const [selectedButton, setSelectedButton] = useState("Gold");
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleClick = (label) => {
    setSelectedButton(label);
  };

  const buttons = ['Gold', 'Silver', 'Bronze'];
  const normalSize = '16px';
  const selectedSize = '20px';


  const getInteriorServices = () => {
    switch (selectedButton) {
      case "Gold":
        return interiorServices.gold;
      case "Silver":
        return interiorServices.silver;
      case "Bronze":
        return interiorServices.bronze;
      default:
        return [];
    }
  };
  const getExteriorServices = () => {
    switch (selectedButton) {
      case "Gold":
        return exteriorServices.gold;
      case "Silver":
        return exteriorServices.silver;
      case "Bronze":
        return exteriorServices.bronze;
      default:
        return [];
    }
  };

  return (
    <div id='services'>
      <Box width='100%' margin='20px auto' bgcolor='white'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Typography variant="h2" textAlign='center' letterSpacing='3px' marginBottom='10px'>SERVICE PACKAGES</Typography>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <ButtonGroup variant="text" aria-label="text button group">
            {buttons.map((label, index) => (
              <Button
                key={index}
                onClick={() => handleClick(label)} // Pass the button label here
                style={{
                  fontWeight: selectedButton === label ? "bold" : "normal",
                  fontSize: selectedButton === label ? selectedSize : normalSize,
                }}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box
          border='2px solid black'
          margin='20px 30px'
          display='flex'
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <Box
            display='flex'
            flexDirection='column'
            width={breakPoint ? '50%' : '80%'}
            paddingLeft='5%'
            margin='15px auto'
          >
            <Box width='50%' borderBottom='2px solid grey' marginBottom='20px' justifyContent='center' display='flex'>
              <Typography
                fontFamily='Montserrat, sans-serif'
                fontWeight='200'
                letterSpacing='2px'
              >
                INTERIOR
              </Typography>
            </Box>
            {/* Interior services checkboxes */}
            {getInteriorServices().map((service, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
              >
                <img
                  src={service.icon}
                  alt={`Checked icon for ${service.name}`}
                  style={{ flexShrink: 0, marginRight: '5px', width: '15px', height: '15px' }}
                />
                <span style={{ lineHeight: 2 }}>{service.name}</span>
              </div>
            ))}
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width={breakPoint ? '50%' : '80%'}
            paddingLeft='5%'
            margin='15px auto'
          >
            <Box width='50%' borderBottom='2px solid grey' marginBottom='20px' justifyContent='center' display='flex'>
              <Typography
                fontFamily='Montserrat, sans-serif'
                fontWeight='200'
                letterSpacing='2px'
              >
                EXTERIOR
              </Typography>
            </Box>
            {getExteriorServices().map((service, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
              >
                <img
                  src={service.icon}
                  alt={`Checked icon for ${service.name}`}
                  style={{ flexShrink: 0, marginRight: '5px', width: '15px', height: '15px' }}
                />
                <span style={{ lineHeight: 2 }}>{service.name}</span>
              </div>
            ))}
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='30px auto'
        >
          <a
            href="https://calendly.com/down2the_detail/estimate?month=2023-07"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="outlined">SCHEDULE AN APPOINTMENT</Button>
          </a>
        </Box>
      </Box>
    </div>
  );
}

export default Services;