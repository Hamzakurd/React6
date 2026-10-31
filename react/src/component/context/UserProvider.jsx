import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { UsersContext } from "./UsersContext";

export const UsersProvider = ({ children }) => {
 
  const { users, getAllUsers } = useAuth();
  
  const deleteUser = async (id) => {
    try {
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      getAllUsers(); // refresh on users
      toast.success("user deleted successfully");
    } catch (error) {
      toast.error(error);
      console.log(error);
      return;
    }
  };
  
  const updateUser = async (id, newData) => {
    try {
     
      const user = users.find((user) => user.id === id);
      
      if (!user) {
        toast.error("user not found!");
        return;
      }
      if (!newData) {
        toast.error("please update!");
        return;
      }
     
      const newUser = { ...user, role: newData };
      
      const updatedUsers = users.map((user) =>
        user.id === id ? newUser : user,
      );
    
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("user role updated");
      getAllUsers(); 
    } catch (error) {
      toast.error(error);
      console.log(error);
      return;
    }
  };
  return (
    <UsersContext.Provider value={{ deleteUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
};