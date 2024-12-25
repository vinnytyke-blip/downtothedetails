import { Box, Button, Typography } from "@mui/material";
import { car, instaphoto, tiktok, heroTwo } from '../../assets';
import React from 'react';


const Phonehero = () => {

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
                        top='40%'
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
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width="70vw" // 90% of the viewport width
                                maxWidth='650px'
                                aspectRatio="1" // Ensures it remains a perfect circle
                                overflow="hidden" // Ensures the image doesn’t overflow
                                marginY='30px'
                                boxShadow='10px 15px 8px rgba(0, 0, 0, 0.8)'
                            >
                                <img
                                    src={heroTwo} // Replace with your image source
                                    alt="Circle portrait"
                                    style={{
                                        width: '100%', // Image fills the container
                                        height: '100%', // Image fills the container
                                        objectFit: 'cover', // Ensures image scales properly without distortion
                                    }}
                                />
                            </Box>

                            {/* <Box marginTop='15px' marginBottom='15px' display='flex' alignItems='center' maxWidth='90%'>
                                <Typography variant="h8" fontSize='12px' letterSpacing='2px'>
                                    I'm Vinny Teich, founder of Down to the Details LLC. We help busy professionals keep their vehicles immaculate with expert detailing services designed for premium care.
                                </Typography>
                            </Box> */}
                            <Box
                                marginTop='8px'
                                marginBottom='15px'
                                display='flex'
                                alignItems='center'
                                maxWidth='90%'
                            >
                                <Typography
                                    variant="h8"
                                    fontSize='12px'
                                    letterSpacing='2px'
                                    fontStyle='italic'
                                    color='#555' // Subtle color for elegance
                                    lineHeight='1.6' // Better readability
                                    textAlign='center'
                                >
                                    I'm Vinny Teich, founder of Down to the Details LLC. We help busy professionals keep their vehicles immaculate with expert detailing services designed for premium care.
                                </Typography>
                            </Box>

                            <Box
                                justifyContent='center'
                                display='flex'
                                marginBottom='10px'
                            >
                                <a
                                    href="https://calendly.com/down2the_detail/estimate?month=2023-07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: '0',
                                            width: { sm: '100%', md: '500px' },
                                            height: '50px',
                                            fontWeight: 'bolder',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 1, // Add space between text and icon
                                        }}
                                    >
                                        <img
                                            src={car} // Replace with your image path
                                            alt="Appointment Icon"
                                            style={{ width: '50px', height: '50px' }} // Adjust size as needed
                                        />
                                        <Typography style={{ fontSize: '10px' }}>
                                            SCHEDULE AN APPOINTMENT
                                        </Typography>
                                    </Button>
                                </a>
                            </Box>
                            <Box
                                marginTop="5px"
                                marginBottom="10px"
                                display="flex"
                                alignItems="center"
                                maxWidth="90%"
                                gap="20px"
                            >
                                <a
                                    href="https://www.instagram.com/down2the_detail/?igshid=YmMyMTA2M2Y%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={instaphoto}
                                        alt="Instagram"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@down2detail602?_t=ZT-8sKM2PkNRLa&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={tiktok}
                                        alt="TikTok"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};


export default Phonehero;
