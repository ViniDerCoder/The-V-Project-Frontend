import { Box } from '@mui/material'
import React, { useState } from 'react'
import "./homepage.css"
import Headbar from './Headbar'
import Sidebar from './sidebar/Sidebar'
import MenuUserAndButton from './MenuUserAndButton'

export interface ColorThemeInterface{
    first: string, 
    second: string,
    third: string,
    fourth: string
}

export default function Homepage() {
    const [colorTheme, setColorTheme] = useState<ColorThemeInterface>({first: "#fab5aa", second: "#282529", third: "#cd3253", fourth: "#f8f3f5"})
    const [sidebarActive, setSidebarActive] = useState(false)

    const handleMenuButtonClick = () =>{
        setSidebarActive(!sidebarActive)
    }

  return (
    <Box sx={{height: "100vh"}}>
        <Headbar colorTheme={colorTheme}/>
        <MenuUserAndButton colorTheme={colorTheme} handleMenuButtonClick={handleMenuButtonClick}/>
        <Sidebar active={sidebarActive} colorTheme={colorTheme}></Sidebar>
        <Box sx={{width: "100%", height: "150vh", backgroundColor: colorTheme.fourth}}></Box>
    </Box>
  )
}
