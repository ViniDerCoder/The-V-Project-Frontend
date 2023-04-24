import { Box } from "@mui/material"
import { ColorThemeInterface } from "../App"
import './Settings.css'

interface Props {
    colorTheme: ColorThemeInterface
}

export default function Settings(props: Props) {
    return(
        <Box sx={{height: "100vh"}}></Box>
    )
}