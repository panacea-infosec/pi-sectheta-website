import React, { useState } from 'react';
import { Button, TextField, Typography, Box, MenuItem, FormControl, Select, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com'; // Import EmailJS
import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption/decryption

export const LiveDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success, error, warning, info

  const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
if (!SECRET_KEY) {
  console.error('Secret key is undefined. Check your .env configuration.');
}

  // Encrypt sensitive IDs (use environment variables)
  const SERVICE_ID = CryptoJS.AES.decrypt(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
  const TEMPLATE_ID = CryptoJS.AES.decrypt(process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
  const USER_ID = CryptoJS.AES.decrypt(process.env.REACT_APP_USER_ID, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);

  // Validation helpers
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleCountryCodeChange = (event) => setCountryCode(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Security checks
    if (!name || !isValidEmail(email) || !isValidPhone(phone)) {
      setSnackbarMessage('Please provide valid details.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const emailData = { name, email, phone };

    try {
      // Send email
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID);
      setSnackbarMessage('Registered successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      // Clear the form
      setName('');
      setEmail('');
      setPhone('');
      setCountryCode('+91');
    } catch (error) {
      console.error('Error sending email');
      setSnackbarMessage('An Error occured!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        pt: 6, mt: '2%', pb: 6, pl: 6, pr: 6, backgroundColor: '#e6e6e6', borderRadius: '50px',
        width: { md: '70%', xs: '100%' }
      }}
    >
      <Typography variant="h6" align="left" sx={{ fontFamily: 'Manrope', color: '#525252' }}>
        Secure your spot in the <span style={{ color: '#DA3D33' }}>program!</span>
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={handleNameChange}
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#d1cdcd', borderWidth: '3px' },
            '&:hover fieldset': { borderColor: '#d1cdcd' },
            '&.Mui-focused fieldset': { borderColor: '#212020' },
          },
        }}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmailChange}
        type="email"
        required
        error={email && !isValidEmail(email)}
        helperText={email && !isValidEmail(email) ? 'Invalid email' : ''}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#d1cdcd', borderWidth: '3px' },
            '&:hover fieldset': { borderColor: '#d1cdcd' },
            '&.Mui-focused fieldset': { borderColor: '#212020' },
          },
        }}
      />
      <Box display="flex" alignItems="center">
        <FormControl
          sx={{
            m: 1, minWidth: 120, ml: '-1px', border: '2px solid #d1cdcd', borderRadius: '6px'
          }}
        >
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            displayEmpty
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#d1cdcd' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#d1cdcd' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#212020' },
            }}
          >
            <MenuItem value="+91">+91</MenuItem>
            <MenuItem value="+1">+1</MenuItem>
            <MenuItem value="+44">+44</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Phone"
          fullWidth
          value={phone}
          onChange={handlePhoneChange}
          required
          error={phone && !isValidPhone(phone)}
          helperText={phone && !isValidPhone(phone) ? 'Invalid phone number' : ''}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#d1cdcd', borderWidth: '3px' },
              '&:hover fieldset': { borderColor: '#d1cdcd' },
              '&.Mui-focused fieldset': { borderColor: '#212020' },
            },
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: '10px', pl: '20px', pr: '20px', pt: '6px', pb: '6px', borderRadius: '25px', textTransform: 'none'
          }}
        >
          Register
        </Button>
      </Box>
      {/* Snackbar */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
