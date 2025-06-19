import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import ReadMeForm from "../components/ReadMeForm";

export default function ReadMePage () {
    return (
        <Box>
            <Typography>Hello and Welcome! </Typography>
            <List>
                <ListItem>
                    <ListItemText>1. Add your info and skills you want on your profile!</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>2. Generate ReadMe</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>3. Create a new github repository and name it exactly the same as your username</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>4. Copy and paste :)</ListItemText>
                </ListItem>
            </List>
            <ReadMeForm />
        </Box>
    )
}