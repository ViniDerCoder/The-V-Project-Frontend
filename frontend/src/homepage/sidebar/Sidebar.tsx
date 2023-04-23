import { Box, Slide } from '@mui/material'
import React from 'react'
import { ColorThemeInterface } from '../Homepage';

interface SidebarProps{
    active: boolean;
    colorTheme: ColorThemeInterface
}

export default function Sidebar(props: SidebarProps) {

  return (
    <Slide direction="left" in={props.active} timeout={700} mountOnEnter unmountOnExit>
        <Box sx={{backgroundColor: props.colorTheme.third, width: "25%", height: "100vh", right: "0px", top: "0vh",position: "absolute"}}></Box>
    </Slide>
  )
}
