import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lottie from "lottie-react";
import { animationData, quoteConfig } from "../../assets";

const Quote = () => {
  const [service, setService] = useState('Gold');
  const [carType, setCarType] = useState('car');
  const [packageType, setPackageType] = useState('full');
  const [quote, setQuote] = useState('$0');
  const breakPoint = useMediaQuery('(min-width:1000px)');

  const handleChange = (event) => {
    setService(event.target.value);
  };
  const handleChangeCar = (event) => {
    setCarType(event.target.value);
  };
  const handleChangeType = (event) => {
    setPackageType(event.target.value);
  };

  const generateQuote = () => {
    const selectedQuote = quoteConfig[service]?.[carType]?.[packageType];
    if (selectedQuote) {
      setQuote(selectedQuote);
    } else {
      setQuote("Please select valid options to get a quote.");
    }
  };

  return (
    <div id="quote">

      <Box
        display='flex'
        height={breakPoint ? '800px' : '100%'}
        borderRadius='2px solid black'
        transition="height 2s" // Set the duration of the transition
        overflow="hidden"
      >
        <Box
          display='flex'
          flexDirection={breakPoint ? 'row' : 'column'}
          width={breakPoint ? '70%' : '90%'}
          alignItems='center'
          justifyContent='space-between'
          margin='50px auto'
        >
          <Box display='flex' flexDirection='column' gap='10px' width='300px'>
            <FormControl sx={{ minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={service}
                label="Service"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Gold"}>Gold</MenuItem>
                <MenuItem value={"Silver"}>Silver</MenuItem>
                <MenuItem value={"Bronze"}>Bronze</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">Car Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={carType}
                label="Car Type"
                onChange={handleChangeCar}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"car"}>car/compact</MenuItem>
                <MenuItem value={"suv"}>suv/mid-size</MenuItem>
                <MenuItem value={"truck"}>van/truck</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 270 }}>
              <InputLabel id="demo-simple-select-helper-label">Interior/Exterior</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={packageType}
                label="Car Type"
                onChange={handleChangeType}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"full"}>full package</MenuItem>
                <MenuItem value={"interior"}>interior only</MenuItem>
                <MenuItem value={"exterior"}>exterior only</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="filled"
              style={{
                backgroundColor: 'black',
              }}
              onClick={generateQuote}
            >
              <Typography color='white'>
                GET Quote
              </Typography>
            </Button>
          </Box>

          <Box
            style={{
              borderLeft: breakPoint ? '2px solid black' : 'none',
              borderBottom: breakPoint ? 'none' : '2px solid black',
              height: breakPoint ? '350px' : 'auto',
              margin: breakPoint ? '0 16px' : '8px 0',
            }}
          />
          <Box
            display='flex'
            alignItems='center'
            width='300px'
          >
              <Typography display='flex' alignItems='center' margin='auto' fontSize={['70px', '80px']} >
                {quote}
              </Typography>
            <Box
              margin='auto 10px'
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              {(quote === "$205" || quote === "$129.99") && (
                <>
                  <Box display='flex' width='50px' height='50px' alignItems='center' justifyContent='center'>
                    <Lottie animationData={animationData} />
                  </Box>
                  <Typography>Best Seller</Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );

};
export default Quote;