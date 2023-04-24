import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./homepage.css"
import Headbar from './Headbar'
import Sidebar from './sidebar/Sidebar'
import MenuUserAndButton from './MenuUserAndButton'
import { ColorThemeInterface } from '../App'
import { useLocation, useNavigate } from 'react-router-dom'

export interface ColorThemeInterface{
    first: string, 
    second: string,
    third: string,
    fourth: string
}
export default function Homepage(props: Props) {
    const navigation = useNavigate()
    const location = useLocation()

    //Send to correct webpage if no path is defined
    useEffect(() => location.pathname === '/' ? navigation('/web/home') : undefined)

export default function Homepage() {
    const [colorTheme, setColorTheme] = useState<ColorThemeInterface>({first: "#3c3f4d", second: "#e8b343", third: "#b75957", fourth: "#f8ffea"})
    const [sidebarActive, setSidebarActive] = useState(false)

    const handleMenuButtonClick = () => {
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
