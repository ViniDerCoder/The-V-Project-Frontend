import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./homepage.css"
import Headbar from './Headbar'
import Sidebar from './sidebar/Sidebar'
import MenuUserAndButton from './MenuUserAndButton'
import { ColorThemeInterface } from '../App'
import { useLocation, useNavigate } from 'react-router-dom'

export interface Props{
    colorTheme: ColorThemeInterface
    handleMenuButtonClick: Function
    sidebarActive: boolean
}
export default function Homepage(props: Props) {
    const navigation = useNavigate()
    const location = useLocation()

    //Send to correct webpage if no path is defined
    useEffect(() => location.pathname === '/' ? navigation('/home') : undefined)


  return (
    <Box sx={{height: "300vh", width: "100%", backgroundColor: props.colorTheme.fourth}}>
        <Box className="sticky-homepage">
            <Headbar colorTheme={props.colorTheme}/>
            <MenuUserAndButton colorTheme={props.colorTheme} handleMenuButtonClick={props.handleMenuButtonClick} active={props.sidebarActive} />
            <Sidebar active={props.sidebarActive} colorTheme={props.colorTheme}></Sidebar>
        </Box>
    </Box>
  )
}
