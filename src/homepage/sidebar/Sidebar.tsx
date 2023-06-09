import { Box, Slide, Typography } from '@mui/material'
import React from 'react'
import { ColorThemeInterface } from '../../App';
import * as ReactRouter from 'react-router-dom';

interface SidebarProps{
    active: boolean;
    colorTheme: ColorThemeInterface
}

export default function Sidebar(props: SidebarProps) {
  const navigation = ReactRouter.useNavigate()

  return (
    <Slide direction="left" in={props.active} timeout={700} mountOnEnter unmountOnExit>
        <Box sx={{
            backgroundColor: props.colorTheme.third, 
            width: "25%", 
            height: "100vh", 
            right: "0px", 
            top: "0vh",
            position: "absolute",
            borderBottomLeftRadius: "2vh",
            borderTopLeftRadius: "2vh",
        }}
        >
          <Box sx={{textAlign: "center", top: "5vh", margin: "20vh"}}>
            <Typography variant='h4' onClick={() => navigation('/settings')}>Test</Typography>
            <Typography variant='h4' onClick={() => navigation('/games')}>Games</Typography>
          </Box>
        </Box> 
    </Slide>
  )
}
