import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodOutlined';
import './Highlight.css'; // Import the CSS file

export const Highlight = () => {
  return (
    <Box className="highlight-container">
      <Divider className="divider" />

      <Box className="highlight-box">
        <Box className="highlight-item">
          <SchoolIcon className="highlight-icon" />
          <Typography className="highlight-text">
            Final Year Tech Students, Fresh Graduates & Early Career Professionals
          </Typography>
        </Box>

        <Box className="highlight-item">
          <CalendarMonthOutlinedIcon className="highlight-icon" />
          <Typography className="highlight-text">
            6-months intensive training program
          </Typography>
        </Box>

        <Box className="highlight-item">
          <GppGoodSharpIcon className="highlight-icon" />
          <Typography className="highlight-text">
            Practitioner-led online learning with live project experiences
          </Typography>
        </Box>
      </Box>

      <Divider className="divider" />
    </Box>
  );
};

export default Highlight;
