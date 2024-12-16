import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import './CareerPath.css'; // Import the CSS file

// Mock data representing each career stage
const careerStages = [
  {
    id: '01',
    image: './career/18.png',
    title: 'Security Analyst/Engineer',
    description: 'Mastering and applying general security principles',
    salary: '4-6 LPA',
    level: 'Early Career (Fresher)',
  },
  {
    id: '02',
    image: './career/19.png',
    title: 'Security Consultant I',
    description: 'Provide expert advice on an organization’s security posture, strategies and Solutions',
    salary: '6-12 LPA',
    level: 'Mid-Career (2-4 Years)',
  },
  {
    id: '03',
    image: './career/20.png',
    title: 'Security Consultant II',
    description: 'Provide expert advice on an organization’s security posture, strategies and Solutions',
    salary: '12-30 LPA',
    level: 'Mid-Career (4-6 Years)',
  },
  {
    id: '04',
    image: './career/21.png',
    title: 'Senior Security Consultant',
    description: 'Lead threat intelligence teams, pen tests, and incident response teams',
    salary: '30-40 LPA',
    level: 'Senior Level (6-8 Years)',
  },
  {
    id: '05',
    image: './career/22.png',
    title: 'Chief Information Security Officer',
    description: 'Leading and protecting information resources and technologies, developing, implementing and enforcing security policies',
    salary: '40+ LPA',
    level: 'Security Leaders (8+ Years)',
  },
];

export const CareerPath = () => {
  const baseHeight = 300;
  const heightIncrement = 50;
  const baseOpacity = 50;
  const opacityIncrement = 10;

  return (
    <Box className="career-path-container">
      <Box className="career-path-title-container">
        <Typography variant="h4" className="career-path-title">
          The Career Path to Success
        </Typography>
        <Typography variant="body1" className="career-path-subtitle">
          A fulfilling, successful and well-paying career in cybersecurity awaits you
        </Typography>
      </Box>

      <Box className="career-path-card-container">
        <Typography className="career-path-arrow" >Career Progression</Typography>

        {/* Career Stages */}
        {careerStages.map((stage, index) => (
          <Card
            key={stage.id}
            className="career-path-card"
            sx={{
              height: `${baseHeight + index * heightIncrement}px`,
              // opacity: `${baseOpacity + index * opacityIncrement}%`,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 1 }}>
              <Box className="career-path-card-number">{stage.id}</Box>
              <Box className="career-path-card-image-container">
                <img src={stage.image} alt="Career Stage" />
              </Box>
              <Typography variant="h6" className="career-path-card-title">
                {stage.title}
              </Typography>
            </Box>
            <Typography variant="body2" className="career-path-card-description">
              {stage.description}
            </Typography>
            <Typography variant="body1" className="career-path-card-salary">
              Salary - <b>{stage.salary}</b>
            </Typography>
            <Typography variant="caption" className="career-path-card-level">
              <b>{stage.level}</b>
            </Typography>
          </Card>
        ))}
      </Box>

      <Box className="career-path-footer">
        <Box />
      </Box>
    </Box>
  );
};

export default CareerPath;
