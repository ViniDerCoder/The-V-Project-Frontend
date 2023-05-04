import { Box } from "@mui/material"
import { ColorThemeInterface } from "../App"
import './Settings.css'

interface Props {
    colorTheme: ColorThemeInterface
}

export default function Settings(props: Props) {
    return(
        <Box sx={{height: "100vh", backgroundColor: props.colorTheme.fourth}}>
            <Box className='settings-title' sx={{backgroundColor: props.colorTheme.first, borderBottomColor: props.colorTheme.second}}>
                <Box className='settings-title-text' sx={{color: props.colorTheme.fourth}}>Test</Box>
            </Box>
            <Box className='sidebar-menu' sx={{backgroundColor: props.colorTheme.first}}></Box>
        </Box>
    )
}