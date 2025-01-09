import React from 'react'
import Navbar from '../components/navbar'
import Footer from './Footer'
import { Box } from '@mui/material'

export const About = () => {
  return (
    <>
     <Navbar />    
     <Box sx={{marginTop:'8rem', display:'grid', placeItems:'center', marginBottom:'5rem'}}>
        <img src='Picture11.png' alt='about' width='80%'/>
     </Box>
    <Footer />
    </>
  )
}
