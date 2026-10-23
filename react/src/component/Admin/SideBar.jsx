import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
export default function SideBar(){
    const {Logout}= useAuth();
    const navigate= useNavigate();
    return<>
    <Box sx={{
        position:"fixed",
        width:"300px",
        bgcolor:"purple",
        height:"100vh",
        overflowY:"scroll",
        color:"white",
        fontSize:"20px",
        fontWeight:"bold",
    }}>
        <List>
            <ListItem>
            <DashboardIcon/>
            <ListItemButton onClick={()=>navigate("/admin/dashboard")}>Dashboard</ListItemButton>
            </ListItem>
            <ListItem>
            <GroupIcon/>
            <ListItemButton>Manage Users</ListItemButton>
            </ListItem>
            <ListItem>
            <CategoryIcon/>
            <ListItemButton>Manage catagories</ListItemButton>
            </ListItem>
            <ListItem>
            < ProductionQuantityLimitsIcon />
            <ListItemButton>Manage Products</ListItemButton>
            </ListItem>
            <ListItem>
            <MessageIcon/>
            <ListItemButton>Manage Messages</ListItemButton>
            </ListItem>
            <ListItem>
            <AccountBoxIcon/>
            <ListItemButton>Manage Profile</ListItemButton>
            </ListItem>
            <ListItem>
            <LogoutIcon />
            <ListItemButton onClick={()=>Logout()}>Logout</ListItemButton>
            </ListItem>
        </List>

    </Box>
    </>
}