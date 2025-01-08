import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './ApplyNow.css'; // Import the CSS file

export const ApplyNow = () => {
  return (
    <Box className="apply-now-container">
        <Box className="apply-now-left">
          <Typography
            variant="h4"
            className="apply-now-title"
          >
            We create leaders in Cybersecurity who learn to thrive during uncertain times.
          </Typography>
          <Typography className="apply-now-list">
            <ul>
                <li>Job readiness program with a highly experiential curriculum in information & payment security</li>
                <li>Certification for enhancing students' credentials and marketability in the cybersecurity job market</li>
                <li>Leverage a network of industry leaders with lifelong learning that extends beyond this program</li>
            </ul>
          </Typography>
          <Button variant="contained" className="apply-now-button">Apply Now</Button>
        </Box>
        <Box className="apply-now-right">
            <img src='./images/apply-now.png' className="apply-now-image" alt="Apply Now" />
        </Box>
    </Box>
  )
}
