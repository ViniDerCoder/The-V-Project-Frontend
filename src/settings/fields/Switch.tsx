import { Box } from "@mui/material"

interface Properties {
    colors: {
        on: string,
        off: string,
        indicator: string
    }
}

export function Switch(props: Properties) {
    return(
        <Box sx={{backgroundColor: "yellow", width: "100px", height: "100px"}}></Box>
    )
}