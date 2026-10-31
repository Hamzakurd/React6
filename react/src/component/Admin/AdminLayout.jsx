import { Box } from "@mui/material";
import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev); 
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      <SideBar onclick={handleClick} open={isOpen} />

      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: isOpen ? "300px" : "70px", 
          width: isOpen ? "calc(100% - 300px)" : "calc(100% - 70px)",
          transition: "margin-left 0.3s ease, width 0.3s ease",
          p: 3,
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}