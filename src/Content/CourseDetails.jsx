import React from 'react';
import { Box, Typography } from '@mui/material';
import './CourseDetails.css'; // Import the CSS file

export const CourseDetails = () => {
  return (
    <Box className="course-details-container">
      <Box className="course-details-content">
        <Box className="course-details-item">
          <Typography variant="body1" className="course-details-text">
            <b>Batch Starts:</b>
            <span className="course-details-value">January 2025</span>
          </Typography>
        </Box>
        <Box className="course-details-item">
          <Typography variant="body1" className="course-details-text">
            <b>Duration:</b>
            <span className="course-details-value">6 Months</span>
          </Typography>
        </Box>
        <Box className="course-details-item">
          <Typography variant="body1" className="course-details-text">
            <b>Mode:</b>
            <span className="course-details-value">Online and On Job Training</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
