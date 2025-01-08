import { Box, Typography, Card, CardContent  } from '@mui/material'
import React from 'react'

const data = [
    {
      id: 1,
      content: 'Founded by Panacea Infosec, a leading global cybersecurity firm',
      image: './WhySec/23.png',
    },
    {
      id: 2,
      content: 'We have 20+ years of industry expertise and legacy in information and data security',
      image: './WhySec/24.png',
    },
    {
      id: 3,
      content: 'You get hands-on training and work on real cases and data.',
      image: './WhySec/25.png',
    },
    {
      id: 4,
      content: 'Get trained by industry experts and mentored by senior leaders',
      image: './WhySec/26.png',
    },
    {
      id: 5,
      content: 'A curriculum with a high practice, instruction, and experience ratio ',
      image: './WhySec/27.png',
    },
    {
      id: 6,
      content: 'Top candidates gain access to placement opportunities with top companies from our client base',
      image: './WhySec/28.png',
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
            width:'100%',
          }}
        >
         Why Choose Sectheta?
        </Typography>
        <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, // One column on small screens, two columns on larger screens
        rowGap: 4,
        columnGap:4,
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
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.09)',
boxShadow: '-9px -9px 18px #f2f2f2, 9px 9px 18px #f2f2f2',
            },  
          }}
        >
          {/* Image on the Left */}
          <Box sx={{ width: '100px', height: '100px', marginRight: 2 }}>
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
