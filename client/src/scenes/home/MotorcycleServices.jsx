import React from 'react';
import { Typography, Box } from '@mui/material';
import { lowMotoService, highMotoService, greenCheck } from '../../assets';

const MotorcycleServices = () => {
    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                // border: '2px solid black'
            }}
        >
            <div
                style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    width="100%"
                    borderBottom="2px solid grey"
                    marginBottom="20px"
                    justifyContent="center"
                    display="flex"
                >
                    <Typography
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="200"
                        letterSpacing="2px"
                        fontSize='18px'
                    >
                        $50 Package
                    </Typography>
                </Box>
                <Box
                    width='80%'

                >
                    {lowMotoService.map((service, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "5px 0",
                                }}
                            >
                                <img
                                    src={greenCheck}
                                    alt={`Checked icon for ${service.name}`}
                                    style={{
                                        flexShrink: 0,
                                        marginRight: "5px",
                                        width: "17px",
                                        height: "17px",
                                    }}
                                />
                                <span style={{ lineHeight: 2 }}>{service.name}</span>
                            </div>
                        );
                    })}
                </Box>
            </div>
            <div
                style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    width="100%"
                    borderBottom="2px solid grey"
                    marginBottom="20px"
                    justifyContent="center"
                    display="flex"
                >
                    <Typography
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="200"
                        letterSpacing="2px"
                        fontSize='18px'
                    >
                        $125-$175 Package
                    </Typography>
                </Box>
                <Box
                    width='80%'
                >
                    {highMotoService.map((service, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "5px 0",
                                }}
                            >
                                <img
                                    src={greenCheck}
                                    alt={`Checked icon for ${service.name}`}
                                    style={{
                                        flexShrink: 0,
                                        marginRight: "5px",
                                        width: "17px",
                                        height: "17px",
                                    }}
                                />
                                <span style={{ lineHeight: 2 }}>{service.name}</span>
                            </div>
                        );
                    })}
                </Box>
            </div>
        </div>
    );
};

export default MotorcycleServices;
