import { Box, Button, Typography } from "@mui/material";
import React from "react";
import './Info.css'; 

export const Info = () => {
  return (
    <Box className="info-container">
      <Typography className="info-title">
        Master Payment Security Auditing: A Curriculum Built on <br />
        <span className="highlighted-text">
          <u>20+ Years of Expertise</u>
        </span>
      </Typography>

      <Box className="info-cards">
        <Box className="info-card">
          <img className="info-card-img" src="97.png" alt="Founded by Panacea" />
          <Typography className="info-card-text">
            Founded by Panacea Infosec, a leading global cybersecurity firm.
          </Typography>
        </Box>

        <Box className="info-card">
          <img className="info-card-img" src="98.png" alt="High practice-to-instruction ratio" />
          <Typography className="info-card-text">
            High practice-to-instruction ratio for practical skill development.
          </Typography>
        </Box>

        <Box className="info-card">
          <img className="info-card-img" src="99.png" alt="1:1 mentorship" />
          <Typography className="info-card-text">
            Receive 1:1 mentorship from seasoned industry veterans and leaders.
          </Typography>
        </Box>
      </Box>

      {/* <Box className="info-button-container">
        <Button variant='contained' className="info-button">
          About us
        </Button>
      </Box> */}
    </Box>
  );
};
