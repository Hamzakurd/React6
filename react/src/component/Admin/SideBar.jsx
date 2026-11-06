
import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import ExtensionIcon from "@mui/icons-material/Extension";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";

export default function Sidebar({ open, onclick }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box
  sx={{
    flex: open ? "0 0 300px" : "0 0 70px",
    width: open ? "300px" : "70px",
    boxSizing: "border-box",
    flexShrink: 0,
    bgcolor: "#301934",

    minHeight: "100vh",
    height: "auto",
    alignSelf: "stretch",

    overflowY: "auto",
    overflowX: "hidden",
    color: "white",
    fontSize: open ? "24px" : "30px",
    fontWeight: "bold",
    textAlign: open ? "left" : "center",
    transition: "all 0.3s ease",
  }}
>
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
          ) : (
            <DashboardIcon onClick={() => navigate("/admin/dashboard")} />
          )}
        </ListItem>

        <ListItem>
          {open ? (
            <>
              <GroupIcon />
              <ListItemButton onClick={() => navigate("/admin/manage-users")}>
                Manage Users
              </ListItemButton>
            </>
          ) : (
            <GroupIcon onClick={() => navigate("/admin/manage-users")} />
          )}
        </ListItem>

        <ListItem>
          <CategoryIcon />
          {open ? <ListItemButton>Manage Categories</ListItemButton> : null}
        </ListItem>

        <ListItem>
          <ExtensionIcon />
          {open ? (
            <ListItemButton onClick={() => navigate("/admin/manage-products")}>
              Manage Products
            </ListItemButton>
          ) : null}
        </ListItem>

        <ListItem>
          <MessageIcon />
          {open ? <ListItemButton>Manage Messages</ListItemButton> : null}
        </ListItem>

        <ListItem>
          <PersonIcon />
          {open ? <ListItemButton>Manage Profile</ListItemButton> : null}
        </ListItem>

        <ListItem>
          <LogoutIcon />
          {open ? (
            <ListItemButton onClick={() => logout()}>
              Logout
            </ListItemButton>
          ) : null}
        </ListItem>
      </List>
    </Box>
  );
}
