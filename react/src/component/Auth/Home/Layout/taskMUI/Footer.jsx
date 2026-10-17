import {Box, Typography} from "@mui/material"
export default function Footer(){
    return(
        <Box sx={{display:"flex" ,flexDirection:"row",flexWrap:"wrap",p:2,bgcolor:'#757ce8'}}>
            <Box sx={{ display:"flex", flexDirection:"column", gap:3,color:"white" }}>
                    <Typography variant="body1">Login</Typography>
                    <Typography variant="body1">Home</Typography>
                    <Typography variant="body1">About</Typography>
                    <Typography variant="body1">Contact</Typography>
                   

            </Box>
            <Box sx={{color:"white", margin:"auto"}}>
                <Typography variant="body1"> Contact US?</Typography>
                <br/>
                <br/>
                <Typography variant="body1"> ...Tesla@2026</Typography>

            </Box>

        </Box>

    )
}