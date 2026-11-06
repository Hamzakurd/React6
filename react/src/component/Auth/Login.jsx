import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
  Alert,
} from "@mui/material";

import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!userData.email || !userData.password) {
      setError("Please enter your email and password");
      return;
    }

    if (typeof login !== "function") {
      setError("Login function is not available. Check AuthContext.");
      return;
    }

    try {
      await login(userData.email, userData.password);
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4">
          Welcome Back!
        </Typography>

        <Divider>Complete your journey</Divider>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Enter your Email"
          type="email"
          value={userData.email}
          onChange={(e) =>
            setUserData({
              ...userData,
              email: e.target.value,
            })
          }
        />

        <TextField
          label="Enter your Password"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({
              ...userData,
              password: e.target.value,
            })
          }
        />

        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>

        <Typography>
          Don't have an account?
        </Typography>

        <Button onClick={() => navigate("/Register")}>
          Register
        </Button>
      </Paper>
    </Container>
  );
}