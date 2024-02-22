import { Carousel } from "react-responsive-carousel";
import { Box, IconButton, Button, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { instaphoto } from '../../assets';
import React, { useEffect, useState } from 'react';


// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context('../../assets/herophotos', false, /\.(png|jpe?g|svg|)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <div id="top">
      <Box
        display='flex'
        style={{ height: '100vh' }}
        position='fixed'
        justifyContent='center'
        marginX='0' // Center horizontally
        width={{ sm: '100vw' }} // Take up full screen width on small screens
      >
        <Box
          width={{ sm: '100%', md: '60%', lg: '45%' }}
          justifyContent='center'
          display='flex'
          marginX='20px'
        >
          <Box
            display='flex'
            top='50%'
            width={{ sm: '100%', md: '600px' }}
            height='100%'
            alignItems='center'
            justifyContent='center'
            zIndex='5'
          >
            <Box
              display='flex'
              flexDirection='column'
              columnGap='20px'
              padding='10px'
              margin={{ sm: 'auto' }}
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                variant="h1"
                fontSize={['42px', '60px']}
              >
                Down to the Details
              </Typography>

              <Box marginTop='5px' marginBottom='10px' display='flex' alignItems='center' maxWidth='90%'>
                <Box marginTop='4px' marginRight='15px'>
                  <a href="https://www.instagram.com/down2the_detail/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
                    <img
                      src={instaphoto}
                      alt="Instagram"
                      width="30" // Set the width of the image as needed
                      height="30" // Set the height of the image as needed
                    />
                  </a>
                </Box>
                <Typography variant="h8" >A clean vehicle, a clean image, and a clean lifestyle</Typography>
              </Box>
              <Box
                justifyContent='center'
                display='flex'
              >
                <a
                  href="https://calendly.com/down2the_detail/estimate?month=2023-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Button variant="outlined" sx={{ borderRadius: '0', width: { sm: '100%', md: '500px' }, height: '50px', fontWeight: 'bolder' }}>
                    SCHEDULE AN APPOINTMENT!!!!
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        {isNonMobile && (
          <Box
            display='flex'
            zIndex='2'
            width='60%'
            style={{ height: '100%', overflow: 'hidden' }}
            sx={{
              right: '0',
            }}
            marginRight='0'
          >
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <IconButton
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    color: "white",
                    padding: "25px",
                    zIndex: "10",
                    opacity: 0, // Initially hide the arrow
                    transition: "opacity 0.3s", // Add a smooth transition
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1"; // Show the arrow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0"; // Hide the arrow when not hovered
                  }}
                >
                  <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
              )}
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <IconButton
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    color: "white",
                    padding: "25px",
                    zIndex: "10",
                    opacity: 0, // Initially hide the arrow
                    transition: "opacity 0.3s", // Add a smooth transition
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1"; // Show the arrow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0"; // Hide the arrow when not hovered
                  }}
                >
                  <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
              )}
            >
              {Object.values(heroTextureImports).map((texture, index) => (
                <Box
                  key={`carousel-image-${index}`}
                  style={{
                    width: "100%",
                    height: "100vh", // Set a fixed height for the Box
                    overflow: "hidden", // Hide any overflow from the image
                  }}
                >
                  <img
                    src={texture}
                    alt={`carousel-${index}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%", // Set the image height to 100% to fill the parent Box
                      objectFit: "cover",
                      backgroundAttachment: "fixed",
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        )}
      </Box>
    </div>
  );
};


export default MainCarousel;
