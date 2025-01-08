import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Intro.css'; // Import the CSS file

export const Intro = () => {
  return (
    <Box className="intro-container">
      <Typography className="intro-title">
        POST GRADUATE<br/> CERTIFICATE PROGRAM <br/>IN PAYMENT SECURITY
      </Typography>

      <Typography className="intro-description">
        From cybersecurity enthusiast to certified auditor - launch your journey with Sectheta.
      </Typography>

      <Typography className="intro-list">
        <ul>
          <li>Final Year Tech Students, <b>Fresh Graduates</b> & Early Career Professionals</li>
          <li><b>6-months</b> intensive training program</li>
          <li>Practitioner-led online learning with live <b>project experiences</b></li>
        </ul>
      </Typography>

      {/* <Button className="intro-button" variant="contained" color="primary" sx={{ borderRadius:'25px'}}>
        Download brochure
      </Button> */}
    </Box>
  );
};

export default Intro;
