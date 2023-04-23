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
    const [colorTheme, setColorTheme] = useState<ColorThemeInterface>({first: "#3c3f4d", second: "#e8b343", third: "#b75957", fourth: "#f8ffea"})
    const [sidebarActive, setSidebarActive] = useState(false)

    const handleMenuButtonClick = () =>{
        setSidebarActive(!sidebarActive)
    }

  return (
    <Box sx={{height: "100vh"}}>
        <Box sx={{position: "sticky"}}>
            <Headbar colorTheme={colorTheme}/>
            <MenuUserAndButton colorTheme={colorTheme} handleMenuButtonClick={handleMenuButtonClick}/>
            <Sidebar active={sidebarActive} colorTheme={colorTheme}></Sidebar>
        </Box>
        <Box sx={{width: "100%", height: "150vh", backgroundColor: colorTheme.fourth}}></Box>
    </Box>
  )
}
