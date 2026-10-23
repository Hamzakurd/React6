import {AppBar, Toolbar, Typography,Box} from "@mui/material"; 

export default function Footer(){

    return (
        <AppBar position="static" sx={{bgcolor:'#757ce8'}}>
            <Toolbar sx ={{ justifyContent : "space-between" , p:3}}>
                
                <Box sx={{ display:"flex", flexDirection:"column", gap:3, flexWrap:"wrap"}}>
                    <Typography variant="h6">Login</Typography>
                    <Typography variant="h6">Home</Typography>
                    <Typography variant="h6">About</Typography>
                    <Typography variant="h6">Contact</Typography>
                   

                </Box>

            </Toolbar>
        
        </AppBar>
    )
}