import { Box } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { ColorThemeInterface } from '../App'
import './homepage.css'

interface MenuUserAndButtonInterface{
    colorTheme: ColorThemeInterface
    handleMenuButtonClick: Function
    active: boolean
}

export default function MenuUserAndButton(props: MenuUserAndButtonInterface) {
    const {handleMenuButtonClick} = props
    const [hover, setHover] = useState(false)
    
  return (
    <>
        <Box className="menu-user-icon" sx={{ backgroundColor: props.colorTheme.third }}></Box>
        <img src="https://www.w3schools.com/images/picture.jpg" className='menu-user-icon' alt=''></img>
        <Box className="menu-button" onClick={() => handleMenuButtonClick()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <MenuButton margin={true} hover={hover} colorTheme={props.colorTheme} active={props.active}></MenuButton>
            <MenuButton margin={true} hover={hover} colorTheme={props.colorTheme} active={props.active}></MenuButton>
            <MenuButton margin={true} hover={hover} colorTheme={props.colorTheme} active={props.active}></MenuButton>
        </Box>
    </>
  )
}

interface MenuButtonInterface{
    margin: boolean
    hover: boolean
    colorTheme: ColorThemeInterface
    active: boolean
}

function MenuButton(props: MenuButtonInterface){
    
    return (
        <Box className="menu-button-element" sx={{
            backgroundColor: !props.active ? !props.hover ? props.colorTheme.third : props.colorTheme.fourth : !props.hover ? props.colorTheme.fourth : props.colorTheme.first,
            mb: props.margin ? "1.2vh" : undefined
        }}
        ></Box>
    )
}
