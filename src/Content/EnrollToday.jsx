import React from "react";
import { Box, Typography } from "@mui/material";
import "./EnrollToday.css"; // Import the CSS file

export const EnrollToday = () => {
  return (
    <Box className="enroll-container">
      <Typography className="enroll-title" variant="h4">
        Are you ready to be tomorrow's leader in
        <br /> cybersecurity?
      </Typography>
      <Typography className="enroll-subtitle" variant="body1">
        Enroll Today to Build a Successful Career
      </Typography>

      <Box className="card-container">
        <Box className="card-box">
          <Typography className="card-text">
            Future Chief Information Security Officer
          </Typography>
          <img
            src="1.png"
            alt="image"
            className="card-image"
          />
        </Box>
        <Box className="card-box">
          <img
            src="2.png"
            alt="image"
            className="card-image"
          />
          <Typography className="card-text">
            Future Ethical Technology Advisor
          </Typography>
        </Box>
        <Box className="card-box">
          <Typography className="card-text">
            Future Payment Security Consultant
          </Typography>
          <img
            src="3.png"
            alt="image"
            className="card-image"
          />
        </Box>
      </Box>

      <Box className="text-box-container">
        <Box className="c-text-box">
          <Typography>
          You are a fresh or final-year engineering/computer application graduate seeking a break in the cybersecurity industry.
          </Typography>
        </Box>
        <Box className="c-text-box text-box-dark">
          <Typography>
          “You want to be a future Chief Information Security Officer (CISO), Security Consultant, or Ethical Hacking Technology Advisor.
          </Typography>
        </Box>
        <Box className="c-text-box">
          <Typography>
            You have strong inclination towards future technologies in
            Information & Network and cybersecurity space.
          </Typography>
        </Box>
        <Box className="c-text-box text-box-dark">
          <Typography>
          You strongly long to enhance your professional status and capabilities or venture into a different field.
          </Typography>
        </Box>
        <Box className="c-text-box">
          <Typography>
            You seek a program with guaranteed internship & job assistance with
            intensive but flexible hybrid learning options.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EnrollToday;
