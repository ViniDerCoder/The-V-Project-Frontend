import { Box } from '@mui/material'
import React, { useState } from 'react'
import { ColorThemeInterface } from './Homepage'
import './homepage.css'
import Sidebar from './sidebar/Sidebar'

interface Props{
    colorTheme: ColorThemeInterface
}

export default function Headbar(props: Props) {
    const [sidebarActive, setSidebarActive] = useState(false)
    const [hover, setHover] = useState(false)

    const handleMenuButtonClick = () =>{
        setSidebarActive(!sidebarActive)
    }

  return (
    <>
        <Box className="header-bar" sx={{backgroundColor: props.colorTheme.first}}>
            <Box className="menu-user-icon" sx={{backgroundColor: props.colorTheme.third}}></Box>
            <img src="https://www.w3schools.com/images/picture.jpg" className='menu-user-icon' alt=''></img>
            <Box className="menu-button" onClick={handleMenuButtonClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Box className="menu-button-element" sx={{
                    backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.third,
                    mb: "1.2vh"
                    }} 
                ></Box>
                <Box className="menu-button-element" sx={{
                    backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.third,
                    mb: "1.2vh"
                    }}
                ></Box>
                <Box className="menu-button-element" sx={{
                    backgroundColor: !hover ? props.colorTheme.second : props.colorTheme.third,
                    }}
                ></Box>
            </Box>
        </Box>
        {sidebarActive ? (
            <Sidebar></Sidebar>
        ): (
            null
        )}
    </>

  )
}
