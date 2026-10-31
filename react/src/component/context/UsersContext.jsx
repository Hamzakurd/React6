
import { createContext, useContext } from "react";
import { AuthContext } from "./authContext.jsx";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
    const { users, setUsers } = useContext(AuthContext);

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const updateUser = (id, role) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, role } : user
        );

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <UsersContext.Provider value={{ deleteUser, updateUser }}>
            {children}
        </UsersContext.Provider>
    );
};
