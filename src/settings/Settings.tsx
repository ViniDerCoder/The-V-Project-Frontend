import { Box } from "@mui/material"
import { ColorThemeInterface } from "../App"
import './Settings.css'
import General from './pages/General'
import Profile_Settings from "./pages/Profile_Settings"
import { useState } from "react"
import * as ReactRouter from "react-router-dom"

import { AiOutlineHome as HomeIcon, AiFillHome as HomeFilledIcon } from "react-icons/ai"


const SettingPages = [
    {title: "General", component: General, unsavedChanges: false},
    {title: "Profile Settings", component: Profile_Settings, unsavedChanges: false}
]

interface Props {
    colorTheme: ColorThemeInterface
}

export default function Settings(props: Props) {
    const navigation = ReactRouter.useNavigate()

    const [activePage = SettingPages.length, setActivePage] = useState(0)
    const [homeHover, setHomeHover] = useState(false)

    const options = SettingPages.map((key, value) => {
        return(<Box className='sidebar-menu-selction-field' onClick={() => setActivePage(SettingPages.indexOf(key))} sx={{color: props.colorTheme.fourth, borderBottomColor: props.colorTheme.first, top: `${7*SettingPages.indexOf(key)+1}vh`}}>{key.title}</Box>)
    })

    return(
        <Box sx={{height: "100vh", backgroundColor: props.colorTheme.fourth}}>
            <Box className='settings-title' sx={{backgroundColor: props.colorTheme.first, borderBottomColor: props.colorTheme.second, color: props.colorTheme.fourth}}>Settings</Box>
            <Box className='settings-action-title' sx={{color: props.colorTheme.first}}>{SettingPages[activePage].title}</Box>
            {!homeHover ? (
                <HomeIcon className='settings-home-button' color={props.colorTheme.first} onMouseEnter={() => setHomeHover(true)} onClick={() =>  {SettingPages.every(obj => !obj.unsavedChanges) ? navigation('/home') : showUnsavedChangesPopUp()}}/>
            ) : (
                <HomeFilledIcon className='settings-home-button' color={props.colorTheme.first}  onMouseLeave={() => setHomeHover(false)} onClick={() =>  {SettingPages.every(obj => !obj.unsavedChanges) ? navigation('/home') : showUnsavedChangesPopUp()}}/>
            )}
            <Box className='settings-action-slot'>
                {SettingPages[activePage].component({colorTheme: props.colorTheme})}
            </Box>
            <Box className='sidebar-menu' sx={{backgroundColor: props.colorTheme.first}}>
                {options}
            </Box>
        </Box>
    )
}

function showUnsavedChangesPopUp() {}