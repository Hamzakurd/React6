
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#f9f9f9",
        overflowX: "hidden",
      }}
    >
      <SideBar onclick={handleClick} open={isOpen} />

      <Box
        component="main"
        sx={{
          flex: "1 1 0%",
          width: 0,
          minWidth: 0,
          boxSizing: "border-box",
          p: 3,
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
