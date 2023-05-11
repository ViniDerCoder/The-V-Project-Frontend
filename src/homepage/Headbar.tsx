import { Box, Typography } from '@mui/material'
import { ColorThemeInterface } from '../App'
import './homepage.css'
import * as ReactRouter from "react-router-dom"

interface Props{
    colorTheme: ColorThemeInterface
}

export default function Headbar(props: Props) {

  const navigation = ReactRouter.useNavigate()

  return (
    <>
        <Box className="header-bar" sx={{backgroundColor: props.colorTheme.first, alignItems: "center"}}>
            <Typography variant='h3' sx={{left: "3vh", position: "absolute", color: props.colorTheme.second, fontFamily: "monospace"}} onClick={() => navigation('/home')}>The-V-Project</Typography>
        </Box>
    </>
  )
}
