import React from 'react'
import { ColorThemeInterface } from '../App'
import { Box } from '@mui/material'
import Headbar from '../homepage/Headbar'
import MenuUserAndButton from '../homepage/MenuUserAndButton'
import Sidebar from '../homepage/sidebar/Sidebar'

interface Props {
    colorTheme: ColorThemeInterface
    sidebarActive: boolean
    handleMenuButtonClick: Function
}

export default function Games(props: Props) {
    return (
        <Box sx={{ height: "100vh", backgroundColor: props.colorTheme.fourth }}>
            <Headbar colorTheme={props.colorTheme}></Headbar>
            <MenuUserAndButton colorTheme={props.colorTheme} handleMenuButtonClick={props.handleMenuButtonClick} active={false}></MenuUserAndButton>
            <Sidebar active={props.sidebarActive} colorTheme={props.colorTheme}></Sidebar>
        </Box>
    )
}
