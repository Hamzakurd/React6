
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    register(userData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
  Register
</Typography>

        <Box component="form" onSubmit={handleRegister}>
          <TextField
            label="Enter your name"
            fullWidth
            margin="normal"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
            required
          />

          <TextField
            label="Enter your email"
            type="email"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />

          <TextField
            label="Enter your password"
            type="password"
            fullWidth
            margin="normal"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />

          <TextField
            label="Enter your confirm password"
            type="password"
            fullWidth
            margin="normal"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
            required
          />

          <Box >
            <Typography>Already have an account?</Typography>
            <Button onClick={() => navigate("/Login")}>
              Login
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.2 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
