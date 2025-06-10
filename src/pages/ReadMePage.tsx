import { Box, Typography } from "@mui/material";
import ReadMeForm from "../components/ReadMeForm";

export default function ReadMePage () {
    return (
        <Box>
            <Typography>Hello and Welcome! </Typography>
            <Typography>Instructions will be here but for now, lorem ipsum and such things</Typography>
            <ReadMeForm />
        </Box>
    )
}