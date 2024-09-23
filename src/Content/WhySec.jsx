import { Box, Typography, Card, CardContent  } from '@mui/material'
import React from 'react'

const data = [
    {
      id: 1,
      content: 'Founded by Panacea Infosec, a leading global cybersecurity firm',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      content: 'We have 20+ years of industry expertise and legacy in information and data security',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      content: 'You get hands-on training and work on real cases and data.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 4,
      content: 'Get trained by industry experts and mentored by senior leaders',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 5,
      content: 'A curriculum with a high practice, instruction, and experience ratio ',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 6,
      content: 'Top candidates gain access to placement opportunities with top companies from our client base',
      image: 'https://via.placeholder.com/100',
    },
  ];
  

export const WhySec = () => {
  return (
    <Box sx={{display:'grid', placeContent:'center'}}>
        <Typography
          variant="h4"
          sx={{
            color: "#2c2c2c",
            fontFamily: "Manrope",
            fontWeight: 800,
            textAlign: "center",
            lineHeight:1.4,
            marginY:'8%',
            width:'100%'
          }}
        >
         Why Choose Sectheta?
        </Typography>
        <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, // One column on small screens, two columns on larger screens
        rowGap: 2,
        columnGap:2,
        placeItems:'center'
      }}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            placeItems:'center',
            alignItems:'center',
            border: '1px solid #ddd',
            borderRadius: '10px',
            width: '300px', 
            height:'250px',
            padding:4,
            boxSizing: 'border-box',
          }}
        >
          {/* Image on the Left */}
          <Box sx={{ width: '200px', height: '100px', marginRight: 2 }}>
          <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>
          {/* Title and Content on the Right */}
            <Typography variant="body2" sx={{fontFamily:'Manrope', lineHeight:1.76, marginTop:2, textAlign:'center', fontSize:'14px'}}>{item.content}</Typography>
        </Card>
      ))}
    </Box>
    </Box>
  )
}