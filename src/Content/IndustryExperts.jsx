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
    {
      name: 'Ajay Kaushik',
      title: 'Chief Executive Officer',
      imgSrc: './images/Experts/1.png',
    },
    {
      name: 'Jitender Khanna',
      title: 'VP – Consulting & Compliance',
      imgSrc: './images/Experts/2.png',
    },
    {
      name: 'Himanshu Mishra',
      title: 'VP – Consulting & Compliance',
      imgSrc: './images/Experts/3.png',
    },
    {
      name: 'Kailash D Aggarwal',
      title: 'Senior Consultant',
      imgSrc: './images/Experts/4.png',
    },
  ];

  return (
    <div className="industry-experts">
      <Typography sx={{fontSize:'32px', fontWeight:'800', margin:'2%', fontFamily:'Manrope'}}>Learn Directly From Industry Experts</Typography>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
      <Box sx={{display:'flex', backgroundColor:'#da3d33', borderRadius:'50px', margin:2, height:'3.5em', width:'24em'}}>
        <Box sx={{backgroundColor:'white', borderRadius:'50px', width:'40px', height:'40px', margin:1, padding:'2px'}}><img src="./images/Icons/37.png" alt="icon" width="30px"/></Box>
        <Typography sx={{color:'white', margin:2}}>PCI Qualified Security Assessors</Typography>
      </Box>
      <Box sx={{display:'flex', backgroundColor:'#da3d33', borderRadius:'50px', margin:2, height:'3.5em', width:'24em'}}>
        <Box sx={{backgroundColor:'white', borderRadius:'50px', width:'40px', height:'40px', margin:1, padding:'2px'}}><img src="./images/Icons/38.png" alt="icon" width="30px"/></Box>
        <Typography sx={{color:'white', margin:2}}>With 20+ years of industry Experience</Typography>
      </Box>
      </Box>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}><img src="./images/Icons/10.png" width='25px'/></button>
        <div className="experts-wrapper" ref={scrollRef}>
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
                <Box sx={{width:'130px', height:'130px', backgroundColor:'#da3d33', borderRadius:'50%', border:'3px solid #da3d33'}}>
              <img src={expert.imgSrc} alt={expert.name} />
                </Box>
              <h3>{expert.name}</h3>
              <p>{expert.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}><img src="./images/Icons/7.png" width='25px'/></button>
      </div>
    </div>
  );
};

export default IndustryExperts;
