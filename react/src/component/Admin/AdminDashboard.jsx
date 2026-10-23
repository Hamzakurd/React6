import { Box, Typography } from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import SideBar from "./SideBar";

export default function AdminDashboard(){
    const {currentUser} = useAuth();
    return<>
    <Box sx={{display:"flex" , flexDirection:"row"}}>
        <Box sx={{flex:1}}>
            <SideBar/>
        </Box>
       
        <Box sx={{flex:4,my:4}}>
            <Typography variant="h4">Welcome {currentUser.name}

            </Typography>
        </Box>
        
    </Box>
    
    
    </>
}