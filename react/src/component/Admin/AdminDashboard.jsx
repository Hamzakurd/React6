
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";


export default function AdminDashboard() {
  const { currentUser } = useAuth();
 
  return (
    <Box sx={{ minHeight: "100vh" }}>
      

      <Box
        sx={{
          ml: open ? "300px" : "70px",
          width: open ? "calc(100% - 300px)" : "calc(100% - 70px)",
          minHeight: "100vh",
          boxSizing: "border-box",
          p: 3,
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <Typography variant="h4">
          Welcome {currentUser.name}
        </Typography>
      </Box>
    </Box>
  );
}
