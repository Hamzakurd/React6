import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
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
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !userData.name.trim() ||
      !userData.email.trim() ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (typeof register !== "function") {
      setError("Register function is not available. Check AuthContext.");
      return;
    }

    setLoading(true);

    try {
      await register(userData);

      setSuccess("Registration successful!");

      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/Login");
    } catch (err) {
      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          p: 4,
          mt: 6,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          Register
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box component="form" onSubmit={handleRegister}>
          <TextField
            label="Enter your name"
            fullWidth
            margin="normal"
            value={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
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
              setUserData({
                ...userData,
                email: e.target.value,
              })
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
              setUserData({
                ...userData,
                password: e.target.value,
              })
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
              setUserData({
                ...userData,
                confirmPassword: e.target.value,
              })
            }
            required
          />

          <Box sx={{ mt: 2 }}>
            <Typography>
              Already have an account?
            </Typography>

            <Button onClick={() => navigate("/Login")}>
              Login
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.2,
            }}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}