import { Box } from "@mui/material";
import { Switch } from "../fields/fields";
import { ColorThemeInterface } from "../../App";

interface Props {
    colorTheme: ColorThemeInterface
}

export default function General(props: Props) {
    return(
        <Box sx={{backgroundColor: "blue", width: "100%", height: "100%", position: "absolute"}}>
            <Switch colors={{on: props.colorTheme.third, off: props.colorTheme.first, indicator: props.colorTheme.fourth}}></Switch>
        </Box>
    )
}