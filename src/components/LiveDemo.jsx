import React, { useState } from 'react';
import { Button, TextField, Typography, Box, MenuItem, FormControl, Select } from '@mui/material';

export const LiveDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  // Set the default country code to India

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange
    = (event) => {
      setPhone(event.target.value);

    };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', { name, email, phone, countryCode });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{
      pt: 6, mt: '2%', pb: 6, pl: 6, pr: 6, backgroundColor: '#e6e6e6', borderRadius: '50px',
      width: { md: '70%', xs: '100%' }
    }}>
      <Typography variant="h6" align="left" sx={{ fontFamily: 'Manrope', color: '#525252' }}>Experience the program for <span style={{ color: '#DA3D33' }}>Free!</span></Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={handleNameChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d1cdcd',
              borderWidth: '3px' // Change border color
            },
            '&:hover fieldset': {
              borderColor: '#d1cdcd', // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#212020', // Change border color when focused
            },
          },
        }}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmailChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d1cdcd',
              borderWidth: '3px' // Change border color
            },
            '&:hover fieldset': {
              borderColor: '#d1cdcd', // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#212020', // Change border color when focused
            },
          },
        }}
      />
      <Box display="flex" alignItems="center">
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            ml: '-1px',
            border: '2px solid #d1cdcd', // Outer FormControl border
            borderRadius: '6px'
          }}
        >
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            displayEmpty
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d1cdcd', // Border color for the Select component
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d1cdcd', // Hover effect to keep the same color
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#212020', // Focused effect
              },
            }}
          >
            <MenuItem value="+91"><img src='https://img.icons8.com/?size=100&id=32584&format=png&color=000000' width='30px' style={{ marginBottom: '-12px', padding: 2 }} />+91</MenuItem>
            <MenuItem value="+1"><img src='https://img.icons8.com/?size=100&id=15532&format=png&color=000000' width='30px' style={{ marginBottom: '-12px', padding: 2 }} />+1</MenuItem>
            <MenuItem value="+44"><img src='https://img.icons8.com/?size=100&id=15534&format=png&color=000000' width='30px' style={{ marginBottom: '-12px', padding: 2 }} />+91</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Phone"
          fullWidth
          value={phone}
          onChange={handlePhoneChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#d1cdcd',
                borderWidth: '3px' // Change border color
              },
              '&:hover fieldset': {
                borderColor: '#d1cdcd', // Change border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#212020', // Change border color when focused
              },
            },
          }}
        />
      </Box>
      <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" color="primary" type="submit" sx={{ mt: '10px', pl: '20px', pr: '20px', pt: '10px', pb: '10px', borderRadius: '25px', textTransform: 'none' }}>
          Book a live-class
        </Button>
      </Box>
    </Box>
  );
};

