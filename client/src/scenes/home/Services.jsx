import { Box, Typography, Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { interiorServices, exteriorServices, interiorServicesTwo, exteriorServicesTwo } from "../../assets";
import { checked, greenCheck } from "../../assets";
import MotorcycleServices from "./MotorcycleServices";

const Services = () => {
  const [selectedButton, setSelectedButton] = useState("Gold");
  const [alignment, setAlignment] = useState("car"); // "web" represents Motorcycle
  const breakPoint = useMediaQuery("(min-width:600px)");
  const buttons = ["Gold", "Silver", "Bronze"];
  const normalSize = "16px";
  const selectedSize = "20px";

  const handleClick = (label) => {
    setSelectedButton(label);
  };

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div id="services">
      <Box width="100%" margin="50px auto" bgcolor="white" paddingTop='50px'>
        <Box display="flex" alignItems="center" justifyContent="center" paddingTop="20px">
          <Typography variant="h2" textAlign="center" letterSpacing="3px">
            SERVICE PACKAGES
          </Typography>
        </Box>

        {/* ToggleButtonGroup for Motorcycle and Car */}
        <Box display="flex" alignItems="center" justifyContent="center" paddingY="30px">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Service Type"
          >
            <ToggleButton value="car">Car</ToggleButton>
            <ToggleButton value="moto">Motorcycle</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {alignment === "moto" ? (
          // Render MotorcycleServices when alignment is "web"
          <MotorcycleServices selectedButton={selectedButton} />
        ) : (
          // Render Car services when alignment is "ios"
          <>
            <Box display="flex" alignItems="center" justifyContent="center">
              <ButtonGroup variant="text" aria-label="text button group">
                {buttons.map((label, index) => (
                  <Button
                    key={index}
                    onClick={() => handleClick(label)}
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
              border="2px solid black"
              margin="20px 30px"
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              {/* Interior Services */}
              <Box
                display="flex"
                flexDirection="column"
                width={breakPoint ? "50%" : "80%"}
                paddingLeft="5%"
                margin="15px auto"
              >
                <Box
                  width="50%"
                  borderBottom="2px solid grey"
                  marginBottom="20px"
                  justifyContent="center"
                  display="flex"
                >
                  <Typography
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="200"
                    letterSpacing="2px"
                  >
                    INTERIOR
                  </Typography>
                </Box>
                {interiorServicesTwo.map((service, index) => {
                  const categoryServices = interiorServices[selectedButton.toLowerCase()];
                  const isHighlighted = categoryServices.some(
                    (categoryService) => categoryService.name === service.name
                  );
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px 0",
                        fontWeight: isHighlighted ? "bold" : "normal",
                        fontSize: isHighlighted ? "18px" : "16px",
                      }}
                    >
                      <img
                        src={isHighlighted ? greenCheck : checked}
                        alt={`Checked icon for ${service.name}`}
                        style={{
                          flexShrink: 0,
                          marginRight: "5px",
                          width: isHighlighted ? "17px" : "15px",
                          height: isHighlighted ? "17px" : "15px",
                        }}
                      />
                      <span style={{ lineHeight: 2 }}>{service.name}</span>
                    </div>
                  );
                })}
              </Box>

              {/* Exterior Services */}
              <Box
                display="flex"
                flexDirection="column"
                width={breakPoint ? "50%" : "80%"}
                paddingLeft="5%"
                margin="15px auto"
              >
                <Box
                  width="50%"
                  borderBottom="2px solid grey"
                  marginBottom="20px"
                  justifyContent="center"
                  display="flex"
                >
                  <Typography
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="200"
                    letterSpacing="2px"
                  >
                    EXTERIOR
                  </Typography>
                </Box>
                {exteriorServicesTwo.map((service, index) => {
                  const categoryServices = exteriorServices[selectedButton.toLowerCase()];
                  const isHighlighted = categoryServices.some(
                    (categoryService) => categoryService.name === service.name
                  );
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px 0",
                        fontWeight: isHighlighted ? "bold" : "normal",
                        fontSize: isHighlighted ? "18px" : "16px",
                      }}
                    >
                      <img
                        src={isHighlighted ? greenCheck : checked}
                        alt={`Checked icon for ${service.name}`}
                        style={{
                          flexShrink: 0,
                          marginRight: "5px",
                          width: isHighlighted ? "17px" : "15px",
                          height: isHighlighted ? "17px" : "15px",
                        }}
                      />
                      <span style={{ lineHeight: 2 }}>{service.name}</span>
                    </div>
                  );
                })}
              </Box>
            </Box>
          </>
        )}

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontStyle="italic">
            Disclaimer: Excessive pet hair may result in a $50 upcharge.
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="20px auto"
        >
          <a
            href="https://calendly.com/down2the_detail/estimate?month=2023-07"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" sx={{ fontWeight: "bolder" }}>
              SCHEDULE AN APPOINTMENT
            </Button>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default Services;