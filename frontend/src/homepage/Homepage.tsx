import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./homepage.css"
import Headbar from './Headbar'
import Sidebar from './sidebar/Sidebar'
import MenuUserAndButton from './MenuUserAndButton'
import { ColorThemeInterface } from '../App'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props{
    colorTheme: ColorThemeInterface
}
export default function Homepage(props: Props) {
    const navigation = useNavigate()
    const location = useLocation()

    //Send to correct webpage if no path is defined
    useEffect(() => location.pathname === '/' ? navigation('/web/home') : undefined)

    const [sidebarActive, setSidebarActive] = useState(false)

    const handleMenuButtonClick = () =>{
        setSidebarActive(!sidebarActive)
    }

  return (
    <Box sx={{height: "100vh"}}>
        <Box sx={{position: "sticky"}}>
            <Headbar colorTheme={props.colorTheme}/>
            <MenuUserAndButton colorTheme={props.colorTheme} handleMenuButtonClick={handleMenuButtonClick}/>
            <Sidebar active={sidebarActive} colorTheme={props.colorTheme}></Sidebar>
        </Box>
        <Box sx={{width: "100%", height: "150vh", backgroundColor: props.colorTheme.fourth}}></Box>
    </Box>
  )
}
