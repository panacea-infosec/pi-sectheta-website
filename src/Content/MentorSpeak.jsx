import { Box, Typography } from '@mui/material';
import React from 'react';
import './MentorSpeak.css'; // Import the external CSS file

export const MentorSpeak = () => {
  return (
    <Box className="mentor-speak-container">
      {/* Left Quotation Mark Image */}
      <Box className="quote-img">
        <img src="5.png" alt="Quote" />
      </Box>

      {/* Left Text Section */}
      <Box className="text-section">
        <Typography variant="h4" className="quote-text">
          This program at Sectheta weaves payment security learning. It provides a stepping stone to create an impact that matters in the Cyber Security space.
        </Typography>
         {/* Right Circular Background */}
      <Box className="circle-img">
        <img src="6.png" alt="circle" />
      </Box>
        <Typography variant="h4" className="mentor-name">
          Sussanne Khan
        </Typography>
        <Typography variant="body1" className="mentor-position">
          IT Analyst, Wipro
        </Typography>
      </Box>

     
    </Box>
  );
};
