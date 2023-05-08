import { Box, Input } from "@mui/material"
import "./Fields.css"

interface Properties {
    colors: {
        on: string,
        off: string,
        indicator: string
    }
}

export function Switch(props: Properties) {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    )
}