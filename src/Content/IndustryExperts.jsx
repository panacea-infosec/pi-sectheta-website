import React, { useRef } from 'react';
import './IndustryExperts.css';
import { Box, Typography } from '@mui/material';

const IndustryExperts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const experts = [
    { name: 'Ajay Kaushik', title: 'Chief Executive Officer', imgSrc: './images/Experts/1.png' },
    { name: 'Jitendra Mishra', title: 'VP – Consulting & Compliance', imgSrc: './images/Experts/2.png' },
    { name: 'Himanshu Mishra', title: 'VP – Consulting & Compliance', imgSrc: './images/Experts/3.png' },
    { name: 'Kailash D Aggarwal', title: 'Senior Consultant', imgSrc: './images/Experts/4.png' },
  ];

  return (
    <div className="industry-experts">
      <Typography className="section-title">Learn Directly From Industry Experts</Typography>
      <div className="highlight-container">
        <Box className="highlight-box">
          <Box className="highlight-icon">
            <img src="./images/Icons/37.png" alt="icon" width="30px" />
          </Box>
          <Typography className="highlight-text">PCI Qualified Security Assessors</Typography>
        </Box>
        <Box className="highlight-box">
          <Box className="highlight-icon">
            <img src="./images/Icons/38.png" alt="icon" width="30px" />
          </Box>
          <Typography className="highlight-text">With 20+ years of industry Experience</Typography>
        </Box>
      </div>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <img src="./images/Icons/10.png" width="25px" alt="scroll left" />
        </button>
        <div className="experts-wrapper" ref={scrollRef}>
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <Box className="expert-avatar">
                <img src={expert.imgSrc} alt={expert.name} />
              </Box>
              <h3>{expert.name}</h3>
              <p>{expert.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <img src="./images/Icons/7.png" width="25px" alt="scroll right" />
        </button>
      </div>
    </div>
  );
};

export default IndustryExperts;
