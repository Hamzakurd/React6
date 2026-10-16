
import { Paper as MuiPaper,Button, Box, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Papers() {
  return (
    <Box sx={{ my: 4, mx: 3 }}>
        <Typography variant="h3">Login</Typography>
      <MuiPaper
        sx={{
          Height: "40vh",
          display: "flex",
          flexDirection: "column",
          p:3,
          gap :4,
          backgroundColor:"grey",
        }}
      >
        <TextField label="name" type="text" />
        <TextField label="email" type="email" />
        <TextField label="password" type="password" />
        <Button>Login</Button>
      </MuiPaper>
    </Box>
  );
}
