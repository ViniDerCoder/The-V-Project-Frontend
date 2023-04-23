import { Box } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { ColorThemeInterface } from './Homepage'
import './homepage.css'

interface MenuUserAndButtonInterface{
    colorTheme: ColorThemeInterface
    handleMenuButtonClick: Function
}

export default function MenuUserAndButton(props: MenuUserAndButtonInterface) {
    const {handleMenuButtonClick} = props
    const [hover, setHover] = useState(false)
    
  return (
    <>
        <Box className="menu-user-icon" sx={{ backgroundColor: props.colorTheme.third }}></Box>
        <img src="https://www.w3schools.com/images/picture.jpg" className='menu-user-icon' alt=''></img>
        <Box className="menu-button" onClick={() => handleMenuButtonClick()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Box className="menu-button-element" sx={{
                backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.fourth,
                mb: "1.2vh"
            }}
            ></Box>
            <Box className="menu-button-element" sx={{
                backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.fourth,
                mb: "1.2vh"
            }}
            ></Box>
            <Box className="menu-button-element" sx={{
                backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.fourth,
            }}
            ></Box>
        </Box>
    </>
  )
}
