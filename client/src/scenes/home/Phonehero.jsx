import { Carousel } from "react-responsive-carousel";
import { Box, IconButton, Button, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { car, instaphoto, portraitmain } from '../../assets';
import React from 'react';



const Phonehero = () => {
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
                            <Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                borderRadius='50%' // Makes the image circular
                                width='100px' // Set the width to 10px // Set the height to 10px
                                backgroundColor='grey' // Set a background color if needed
                            >
                                <img
                                    src={portraitmain} // Replace with your image source
                                    alt="Circle Image"// Image height
                                />
                            </Box>

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
                                        SCHEDULE AN APPOINTMENT
                                    </Button>
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
