"use client";

import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <CircularProgress 
        size={60} 
        thickness={5} 
        sx={{ color: '#66BB6A', marginBottom: 3 }} 
      />
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#66BB6A',
          fontFamily: "'Hind Siliguri', sans-serif",
        }}
      >
        লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#555555',
          mt: 1,
        }}
      >
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoadingPage;