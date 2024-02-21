import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { interiorServices, exteriorServices, interiorServicesTwo, exteriorServicesTwo } from "../../assets";
import { checked, greenCheck } from "../../assets";


const Services = () => {
  const [selectedButton, setSelectedButton] = useState("Gold");
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleClick = (label) => {
    setSelectedButton(label);
  };

  const buttons = ['Gold', 'Silver', 'Bronze'];
  const normalSize = '16px';
  const selectedSize = '20px';


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
            {interiorServicesTwo.map((service, index) => {
              const categoryServices = interiorServices[selectedButton.toLowerCase()]; // Get services based on selected category
              const isHighlighted = categoryServices.some(categoryService => categoryService.name === service.name); // Check if service exists in selected category
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px 0",
                    fontWeight: isHighlighted ? "bold" : "normal",
                    fontSize: isHighlighted ? "18px" : "16px", // Apply bold styling if service exists in selected category
                  }}
                >
                  <img
                    src={isHighlighted ? greenCheck : checked}
                    alt={`Checked icon for ${service.name}`}
                    style={{ flexShrink: 0, marginRight: '5px', width: isHighlighted ? '17px' : '15px', height: isHighlighted ? '17px' : '15px' }}
                  />
                  <span style={{ lineHeight: 2 }}>{service.name}</span>
                </div>
              );
            })}
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
            {exteriorServicesTwo.map((service, index) => {
              const categoryServices = exteriorServices[selectedButton.toLowerCase()]; // Get services based on selected category
              const isHighlighted = categoryServices.some(categoryService => categoryService.name === service.name); // Check if service exists in selected category
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px 0",
                    fontWeight: isHighlighted ? "bold" : "normal",
                    fontSize: isHighlighted ? "18px" : "16px", // Apply bold styling if service exists in selected category
                  }}
                >
                  <img
                    src={isHighlighted ? greenCheck : checked}
                    alt={`Checked icon for ${service.name}`}
                    style={{ flexShrink: 0, marginRight: '5px', width: isHighlighted ? '17px' : '15px', height: isHighlighted ? '17px' : '15px' }}
                  />
                  <span style={{ lineHeight: 2 }}>{service.name}</span>
                </div>
              );
            })}
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography fontStyle='italic' style={{ marginBottom: '10px' }}>
            Disclaimer: <span style={{ fontWeight: 'bolder', fontSize: '17px' }}> Dog Hair
            </span> will be an up charge of <span style={{ fontWeight: 'bolder', fontSize: '17px' }}>$75</span>
          </Typography>
          <Typography fontStyle='italic'>
            Add <span style={{ fontWeight: 'bolder', fontSize: '17px' }}>Engine Detail</span> for <span style={{ fontWeight: 'bolder', fontSize: '17px' }}>$95</span> per Engine
          </Typography>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='20px auto'
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