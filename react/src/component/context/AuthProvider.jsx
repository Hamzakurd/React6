
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./authContext";
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch {
      return null;
    }
  });

  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = JSON.parse(localStorage.getItem("users"));
      return Array.isArray(savedUsers) ? savedUsers : [];
    } catch {
      return [];
    }
  });

  const getAllUsers = () => {
    try {
      const savedUsers = JSON.parse(localStorage.getItem("users"));
      const updatedUsers = Array.isArray(savedUsers) ? savedUsers : [];

      setUsers(updatedUsers);
      return updatedUsers;
    } catch (error) {
      toast.error("Failed to load users");
      console.error(error);
      return [];
    }
  };

  const register = async (data) => {
    try {
      if (
        !data.name?.trim() ||
        !data.email?.trim() ||
        !data.password ||
        !data.confirmPassword
      ) {
        throw new Error("Please fill all fields!");
      }

      if (data.name.trim().length < 3) {
        throw new Error("Please enter a valid name");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(data.email.trim())) {
        throw new Error("Please enter a valid email");
      }

      const email = data.email.trim().toLowerCase();

      const isExist = users.find(
        (user) => user.email.toLowerCase() === email
      );

      if (isExist) {
        throw new Error("You already have an account!");
      }

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(data.password)) {
        throw new Error(
          "Password must contain uppercase, lowercase, number, symbol and at least 8 characters"
        );
      }

      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords don't match!");
      }

      const newUser = {
        id: Date.now(),
        name: data.name.trim(),
        email,
        password: data.password,
        role: "user",
      };

      const newUsers = [...users, newUser];

      localStorage.setItem("users", JSON.stringify(newUsers));
      setUsers(newUsers);

      toast.success("Registered successfully!");

      navigate("/Login");

      return true;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      if (!email?.trim() || !password) {
        throw new Error("Please fill all fields!");
      }

      const normalizedEmail = email.trim().toLowerCase();

      const existingUser = users.find(
        (user) => user.email.toLowerCase() === normalizedEmail
      );

      if (!existingUser) {
        throw new Error("You don't have an account!");
      }

      if (existingUser.password !== password) {
        throw new Error("Password is not correct");
      }

      const { password: _, ...userWithoutPassword } = existingUser;

      setCurrentUser(userWithoutPassword);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(userWithoutPassword)
      );

      toast.success("Login successfully!");

      if (existingUser.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

      return true;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");

    setCurrentUser(null);

    toast.success("Logout successfully");

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        login,
        register,
        logout,
        getAllUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};