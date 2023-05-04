import { Box, Typography } from "@mui/material"
import { ColorThemeInterface } from "../App"
import './Settings.css'
import General from './pages/General'
import Profile_Settings from "./pages/Profile_Settings"
import { useState } from "react"

const SettingPages = [
    {title: "General", component: General, unsavedChanges: false},
    {title: "Profile Settings", component: Profile_Settings, unsavedChanges: false}
]

interface Props {
    colorTheme: ColorThemeInterface
}

export default function Settings(props: Props) {
    const [activePage = SettingPages.length, setActivePage] = useState(1)

    const options = SettingPages.map((key, value) => {
        return(<Box className='sidebar-menu-selction-field' onClick={() => setActivePage(SettingPages.indexOf(key))} sx={{color: props.colorTheme.fourth, borderBottomColor: props.colorTheme.first, top: `${7*SettingPages.indexOf(key)+1}vh`}}>{key.title}</Box>)
    })

    return(
        <Box sx={{height: "100vh", backgroundColor: props.colorTheme.fourth}}>
            <Box className='settings-title' sx={{backgroundColor: props.colorTheme.first, borderBottomColor: props.colorTheme.second}}>
                <Box className='settings-title-text' sx={{color: props.colorTheme.fourth}}>Test</Box>
            </Box>
            {SettingPages[activePage].component()}
            <Box className='sidebar-menu' sx={{backgroundColor: props.colorTheme.first}}>
                {options}
            </Box>
        </Box>
    )
}