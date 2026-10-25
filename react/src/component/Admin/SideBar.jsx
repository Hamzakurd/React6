
import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ReorderIcon from '@mui/icons-material/Reorder';

export default function SideBar({ open, onclick }) {
    const { Logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Box sx={{
            position: "fixed",
            width: open ? "300px" : "70px",
            bgcolor: "primary.main",
            height: "100vh",
            overflowY: "auto",
            color: "white",
            fontSize: open ? "24px" : "30px",
            fontWeight: "bold",
            textAlign: open ? "left" : "center",
        }}>
            <Button onClick={onclick}>
                <ReorderIcon />
            </Button>

            <List>
                <ListItem>
                   
                    {open ? (
                        <>
                         <DashboardIcon />
                        <ListItemButton onClick={() => navigate("/admin/dashboard")}>
                            Dashboard
                        </ListItemButton>
                        </>
                    ):(
                        <>
                         <DashboardIcon sx={{cursor:"pointer"}} onClick={()=> navigate("/admin/dashboard")} />
                     </>
                    )}
                </ListItem>

                <ListItem>
                    <GroupIcon />
                    {open && <ListItemButton>Manage Users</ListItemButton>}
                </ListItem>

                <ListItem>
                    <CategoryIcon />
                    {open && <ListItemButton>Manage Categories</ListItemButton>}
                </ListItem>

                <ListItem>
                    <ProductionQuantityLimitsIcon />
                    {open && <ListItemButton>Manage Products</ListItemButton>}
                </ListItem>

                <ListItem>
                    <MessageIcon />
                    {open && <ListItemButton>Manage Messages</ListItemButton>}
                </ListItem>

                <ListItem>
                    <AccountBoxIcon />
                    {open && <ListItemButton>Manage Profile</ListItemButton>}
                </ListItem>

                <ListItem>
                    <LogoutIcon />
                    {open && (
                        <ListItemButton onClick={() => Logout()}>
                            Logout
                        </ListItemButton>
                    )}
                </ListItem>
            </List>
        </Box>
    );
}
