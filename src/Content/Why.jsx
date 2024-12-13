import { Box, Typography, Card, CardContent } from '@mui/material';
import React from 'react';
import './Why.css'; // Import the external CSS file

const data = [
  {
    id: 1,
    title: 'High Demand',
    content: 'With over 3.5 million cybersecurity jobs were unfilled in 2023*, the demand for specialised professionals is at an all-time high.',
    image: './why/14.png',
  },
  {
    id: 2,
    title: 'Rapidly Growing Industry',
    content: 'With Digital Payments, Crypto, Blockchain, IoT and Quantum AI taking over, there’s a need to build a resilient digital ecosystem like never before.',
    image: './why/15.png',
  },
  {
    id: 3,
    title: 'Career Progression',
    content: 'The field offers immense potential for advancement and to climb up the corporate ladder swiftly, while ensuring long-term career stability.',
    image: './why/16.png',
  },
  {
    id: 4,
    title: 'Lucrative Salary',
    content: 'Security Analysts are amongst the top earners in the IT sector. Given the specialised skillset and the increasing demand, companies are offering competitive salaries.',
    image: './why/17.png',
  },
];

export const Why = () => {
  return (
    <Box className="why-container">
      <Typography variant="h4" className="why-heading">
        Why Become a Security Analyst?
      </Typography>
      <Box className="why-cards">
        {data.map((item) => (
          <Card key={item.id} className="why-card">
            {/* Image on the Left */}
            <Box className="why-card-image-box">
              <img className='why-card-image' src={item.image} alt={item.title} />
            </Box>
            {/* Title and Content on the Right */}
            <CardContent className="why-card-content">
              <Typography variant="h6" className="why-card-title">{item.title}</Typography>
              <Typography variant="body2" className="why-card-description">{item.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
