import {AppBar, Toolbar, Typography,Box} from "@mui/material";

export default function Header(){

    return (
        <AppBar position="sticky" sx={{bgcolor:'#757ce8'}}>
            <Toolbar sx ={{ justifyContent : "space-between" , p:3}}>
                <Typography variant="h3">Logo</Typography>
                <Box sx={{ display:"flex", flexDirection:"row", gap:3, flexWrap:"wrap"}}>
                    <Typography variant="h6">Login</Typography>
                    <Typography variant="h6">Home</Typography>
                    <Typography variant="h6">About</Typography>
                    <Typography variant="h6">Contact</Typography>
                   

                </Box>

            </Toolbar>
        
        </AppBar>
    )
}