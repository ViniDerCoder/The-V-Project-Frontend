import { Box } from '@mui/material'
import React, { useState } from 'react'
import "./homepage.css"
import Headbar from './Headbar'

export interface ColorThemeInterface{
    first: string, 
    second: string,
    third: string,
}

export default function Homepage() {
    const [colorTheme, setColorTheme] = useState<ColorThemeInterface>({first: "#390632", second: "#DB2568", third: "#982c66"})

  return (
    <>
        <Headbar colorTheme={colorTheme}/>
    </>
  )
}
