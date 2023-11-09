import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { menu, close, navLinks } from "../../assets";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets/logo", false, /\.(png|PNG|jpe?g|svg)$/)
);

const logo = heroTextureImports["IMG_5789.PNG"]

function Navbar() {
  const navigate = useNavigate();
  const breakPoint = useMediaQuery("(min-width:560px)");
  const breakPointTwo = useMediaQuery("(min-width:1090px)");
  const showTypography = breakPointTwo; // Show Typography when breakPoint is false (screen width < 600px)
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      backgroundColor="black"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
    >
      <Box
        width="90%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display='flex'
          alignItems='center'
          columnGap='20px'
          onClick={() => {
            navigate("/");
            scroll.scrollToTop(); // Scroll to top
          }}
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          <img src={logo} alt="Washing" style={{ width: '150px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
          {showTypography && (
            <Typography variant="h2" style={{ color: "white" }}>
              Down To The Details L.L.C.
            </Typography>
          )}
        </Box>
        {!breakPoint && (<Box
          display="flex"
          zIndex="2"
        >
          (<img
            src={toggle ? close : menu}
            alt="menu"
            width='28px'
            height='28px'
            cursor="pointer"
            onClick={() => setToggle(!toggle)}
            zIndex='1000'
          />

          {toggle && (<Box
            display='flex'
            flexDirection='column'
            paddingRight='8px'
            position='absolute'
            top='80px'
            right='0px'
            minWidth='120px'
            backgroundColor='black'
            alignItems='center'
          >
            <ul
              style={{ listStyleType: 'none', textDecoration: 'none', justifyContent: 'end' }}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  color={`${active === link.title ? '#ff9900' : 'white'}`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  style={{ marginTop: '5px' }}
                >
                  <ScrollLink to={link.id} smooth={true} duration={500} className="" offset={-100}>
                    <Typography variant='h4' style={{ color: active === link.title ? '#ff9900' : 'white' }}>
                      {link.title}
                    </Typography>
                  </ScrollLink>
                </li>
              ))};
            </ul>
          </Box>
          )}
        </Box>
        )}
        {breakPoint && (
        <Box
          display='flex'
          flexDirection='row'
          zIndex='2'
        >
            <ul
              style={{ listStyleType: 'none', textDecoration: 'none', justifyContent: 'end', display: 'flex' }}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  color={`${active === link.title ? '#ff9900' : 'white'}`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  style={{ marginRight: '10px', "&:hover": { cursor: "pointer" } }}
                >
                  <ScrollLink to={link.id} smooth={true} duration={500} className="" offset={-100}>
                    <Typography variant='h4' style={{ color: active === link.title ? '#ff9900' : 'white' }}>
                      {link.title}
                    </Typography>
                  </ScrollLink>
                </li>
              ))};
            </ul>
        </Box>)}
      </Box>
    </Box >
  );
}

export default Navbar;