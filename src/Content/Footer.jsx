import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css'; // Import the CSS file

export const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="footer-left">
        <img className='footer-logo' src="logo.png" alt="company logo" width="200px" style={{backgroundColor:'white'}}/>
        <Box className="footer-description">
          <Typography variant="body1">
            Sectheta is dedicated to bridging the gap between academic knowledge and industry demands in the field of cybersecurity, information security and payment security through its comprehensive curriculum designed by industry experts that are tailored for engineering and MCA graduates.
          </Typography>
        </Box>
      </Box>

      <Box className="footer-right">
        <Box className="footer-contact-info">
          <img src="41.png" alt="location" />
          <Box className="contact-detail">
            <Typography className="contact-title">Address</Typography>
            <Typography className="contact-text">226, Pocket A2, Pocket B, Sector 17 Dwarka, Dwarka, Delhi, 110075</Typography>
          </Box>
        </Box>

        <Box className="footer-contact-info">
          <img src="41.png" alt="phone" />
          <Box className="contact-detail">
            <Typography className="contact-title">Phone</Typography>
            <Typography className="contact-text">18005709907</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
