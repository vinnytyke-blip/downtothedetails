import React from 'react';
import { fourstep } from '../../assets';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@mui/material';

// Custom component for each step
const StepItem = ({ step }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Ensure the animation triggers only once when in view
    threshold: 0.5,     // Trigger when 50% of the element is in view
  });

  const smallScreenStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '14px',
    padding: '10px',
    maxWidth: '175px',
    borderRadius: '8px',
    margin: 'auto',
    flexDirection: 'row',
    boxShadow:
      'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    letterSpacing: '2px',
    opacity: inView ? 1 : 0, // Fade in when in view
    transform: inView ? 'translateX(0)' : 'translateX(-100%)', // Slide in from left when in view
    transition: 'transform 1s ease, opacity 1s ease', // Smooth transition for sliding and fading
  };

  const mediumScreenStyles = {
    ...smallScreenStyles,
    maxWidth: '700px', // Adjust for mid-sized screens
    padding: '12px',  // Increase padding slightly
    gap: '16px',     // Slightly increase gap
    fontSize: '16px', // Increase font size
  };

  const largeScreenStyles = {
    ...mediumScreenStyles, // Adjust for large screens
    maxWidth: '250px',
    padding: '15px',
    gap: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted for better alignment on large screens
    flexDirection: 'column',
  };

  return (
    <div
      ref={ref}
      style={
        window.innerWidth <= 600
          ? smallScreenStyles
          : window.innerWidth <= 1150
            ? mediumScreenStyles
            : largeScreenStyles
      }
    >
      <img
        src={step.image}
        alt={step.title}
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />
      <h3
        style={{
          margin: '0 0 10px',
        }}
      >
        {step.title}
      </h3>

      <div
        style={{
          margin: 0,
          lineHeight: '1.5',
          maxHeight: '200px',
        }}
      >
        {step.text}
      </div>
    </div>
  );
};

const Threestep = () => {
  const isNarrowScreen = useMediaQuery("(max-width: 1350px)");
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isNarrowScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px',
        padding: '115px', // Ensure full width // Include padding in size calculations
      }}
    >
      {fourstep.map((step, index) => (
        <StepItem key={index} step={step} />
      ))}
    </div>
  );
};

export default Threestep;
