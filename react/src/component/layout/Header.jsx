
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const isLoggedIn = currentUser && Object.keys(currentUser).length > 0;

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" sx={{ bgcolor: "#757ce8" }}>
      <Toolbar sx={{ justifyContent: "space-between", p: 3 }}>
        <Typography variant="h3">Logo</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <IconButton color="inherit" onClick={() => navigate("/home")}>
            Home
          </IconButton>

          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </IconButton>

          {!isLoggedIn ? (
            <>
              <IconButton color="inherit" onClick={() => navigate("/Login")}>
                Login
              </IconButton>

              <IconButton color="inherit" onClick={() => navigate("/Register")}>
                Register
              </IconButton>

              <IconButton color="inherit" onClick={() => navigate("/Contact")}>
                Contact
              </IconButton>
            </>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => {
                logout();
                navigate("/home");
              }}
            >
              Logout
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
