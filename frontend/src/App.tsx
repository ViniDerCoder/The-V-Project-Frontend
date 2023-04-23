import React from 'react';
import './App.css';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <Box sx={{position: "relative", width: "90%", height: "90vh", backgroundColor: "red", left: "50%", transform: "translateX(-50%)"}}></Box>
      <Box sx={{position: "relative", width: "90%", height: "90vh", backgroundColor: "blue", left: "50%", transform: "translateX(-50%)"}}></Box>
    </>
    );
}