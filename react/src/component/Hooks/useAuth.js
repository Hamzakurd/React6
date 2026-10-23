
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useAuth = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        return Array.isArray(storedUsers)
            ? storedUsers
            : storedUsers.email
                ? [storedUsers]
                : [];
    });

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || {}
    );

    const adminEmail = "admin@admin.com";
    const adminPassword = "Admin123@";

    const adminUser = {
        name: "Admin",
        email: adminEmail,
        password: adminPassword,
        id: 1,
        role: "admin"
    };

    const register = async (data) => {
        try {
            if (
                !data.name?.trim() ||
                !data.email?.trim() ||
                !data.password ||
                !data.confirmPassword
            ) {
                toast.error("Please fill all fields!");
                return;
            }

            if (data.name.trim().length < 3) {
                toast.error("Please enter a valid name");
                return;
            }

            const email = data.email.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid email");
                return;
            }

            const isExist = users.find(
                user => user.email?.toLowerCase() === email.toLowerCase()
            );

            if (
                email.toLowerCase() === adminEmail.toLowerCase() ||
                isExist
            ) {
                toast.error("You already have an account!");
                return;
            }

            if (data.password !== data.confirmPassword) {
                toast.error("Passwords do not match!");
                return;
            }

            const newUser = {
                name: data.name.trim(),
                email,
                password: data.password,
                id: Date.now(),
                role: "user"
            };

            const newUsers = [...users, newUser];

            setUsers(newUsers);
            localStorage.setItem("users", JSON.stringify(newUsers));

            toast.success("Registration successful!");
            navigate("/login");
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const cleanEmail = email?.trim().toLowerCase();

            if (!cleanEmail || !password) {
                toast.error("Please fill all fields!");
                return;
            }

            if (
                cleanEmail === adminEmail.toLowerCase() &&
                password === adminPassword
            ) {
                setCurrentUser(adminUser);
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(adminUser)
                );

                toast.success("Admin login successful!");
                navigate("/admin/dashboard");
                return;
            }

            const isExist = users.find(
                user => user.email?.toLowerCase() === cleanEmail
            );

            if (!isExist) {
                toast.error("You don't have an account!");
                return;
            }

            if (isExist.password !== password) {
                toast.error("Password is not correct!");
                return;
            }

            setCurrentUser(isExist);
            localStorage.setItem(
                "currentUser",
                JSON.stringify(isExist)
            );

            toast.success("Login successful!");

            if (isExist.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/Home");
            }
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
        }
    };

    const logout = () => {
        setCurrentUser({});
        localStorage.removeItem("currentUser");
        toast.success("Logged out successfully!");
        navigate("/login");
    };

    return { register, login, logout, users, currentUser };
};
