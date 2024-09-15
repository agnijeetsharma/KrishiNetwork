// src/pages/Signup.js
// import React from 'react';
import SignUpCard from '../components/signupCard';
import Box from '@mui/material/Box';

export default function Signup() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#c2deb6'
      }}>
      <SignUpCard />
    </Box>
  );
}
