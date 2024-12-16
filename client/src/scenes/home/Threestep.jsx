import React from 'react';
import { fourstep } from '../../assets';
import useMediaQuery from "@mui/material/useMediaQuery";

const Threestep = () => {

  const isNarrowScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: isNarrowScreen ? 'column' : 'row', // Default to 'row', switch to 'column' on narrow screens
        gap: '50px',
        padding: '50px',
      }}
    >
      {fourstep.map((step, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '15px',
            maxWidth: window.innerwidth < 700 ? '' : '250px',
            borderRadius: '8px',
            margin: 'auto',
            flexDirection: window.innerWidth < 700 ? 'row' : 'column',
          }}
        >
          <img
            src={step.image}
            alt={step.title}
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>{step.title}</h3>
          <div style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', maxHeight: '200px' }}>{step.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Threestep;