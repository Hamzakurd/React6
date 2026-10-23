
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Divider
} from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleLogin = () => {
        login(userData.email, userData.password);
    };

    return (
        <Container sx={{ my: "auto" }}>
            <Paper
                elevation={4}
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3
                }}
            >
                <Typography variant="h4">
                    Welcome Back!
                </Typography>

                <Divider>Complete your journey</Divider>

                <TextField
                    label="Enter your Email"
                    type="email"
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                />

                <TextField
                    label="Enter your Password"
                    type="password"
                    value={userData.password}
                    onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                    }
                />

                <Button
                    variant="contained"
                    onClick={handleLogin}
                >
                    Login
                </Button>

                <Typography>Don't have an account?</Typography>

                <Button onClick={() => navigate("/Register")}>
                    Register
                </Button>
            </Paper>
        </Container>
    );
}
