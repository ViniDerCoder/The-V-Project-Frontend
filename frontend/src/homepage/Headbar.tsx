import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ColorThemeInterface } from '../App'
import './homepage.css'

interface Props{
    colorTheme: ColorThemeInterface
}

export default function Headbar(props: Props) {

  return (
    <>
        <Box className="header-bar" sx={{backgroundColor: props.colorTheme.first, alignItems: "center"}}>
            <Typography variant='h3' sx={{left: "3vh", position: "absolute", color: props.colorTheme.second, fontStyle: "oblique"}}>The-V-Project</Typography>
        </Box>
    </>
  )
}
