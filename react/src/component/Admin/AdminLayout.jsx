
import{Box} from "@mui/material"
import { useState } from "react"
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
export default function AdminLayout(){
    const [isOpen, setIsOpen]=useState(true);
    const handleClick=()=>{
        setIsOpen(isOpen)
    };
    return<>
     
    <Box sx={{
        display:"flex",
        flexDirection:"row",
    }}>
        <Box sx={{flex:1}}>
            <SideBar onclick={handleClick} open={isOpen}/>

        </Box>
        <Box sx={{flex:4, my:4}}>
            <Outlet/>

        </Box>



    </Box>
    
    
    
    
    </>
    
}