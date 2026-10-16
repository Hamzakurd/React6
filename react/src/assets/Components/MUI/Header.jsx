import { AppBar , Toolbar , Typography} from "@mui/material"

export default function Header(){
    return (
        <AppBar>
            <Toolbar sx={{gap:3}}>
                <Typography variant="body1">Home</Typography>
                <Typography variant="body1">About</Typography>
                <Typography variant="body1">Contact</Typography>
                <Typography variant="body1">Login</Typography>
                <Typography variant="body1">Register</Typography>
            </Toolbar>
        </AppBar>

    );
}