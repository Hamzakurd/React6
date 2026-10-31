import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAuth } from "../Hooks/useAuth";
import { useUsers } from "../Hooks/useUsers";
import { useState } from "react";
import Register from "../Auth/Register";
export default function DisplayUsers() {
  const { users } = useAuth();
  const { deleteUser, updateUser } = useUsers();
  const [role, setNewRole] = useState(""); // the new role
  const [isUpdated, setIsUpdated] = useState(null); // the id for the user who will be updated!
  const handleSave = () => {
    updateUser(isUpdated, role);
    setIsUpdated(null);
  };
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h3">Manage Users</Typography>
        <Divider sx={{ p: 2 }}>where to manage</Divider>
        <Button
          variant="contained"
          sx={{ m: 3 }}
          onClick={() => setOpenForm(!openForm)}
        >
          Add User
        </Button>

        {openForm && <Register />}
     <TableContainer
  sx={{
    width: "90%",
    mx: "auto",
    overflowX: "auto"
  }}
>
          <Table sx={{ width: "100%" }}>
    <TableHead>
        <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
        </TableRow>
    </TableHead>

    <TableBody>
        {users.map((user, idx) => {
            return (
                <TableRow key={user.id}>
                    <TableCell align="center">{idx + 1}</TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">
                        {isUpdated === user.id ? (
                            <FormControl fullWidth>
                                <InputLabel>Role</InputLabel>
                                <Select
                                    label="Role"
                                    onChange={(e) => setNewRole(e.target.value)}
                                >
                                    <MenuItem value="user">User</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                </Select>
                            </FormControl>
                        ) : (
                            user.role
                        )}
                    </TableCell>
                    <TableCell align="center">
                        {/* اترك أزرار Edit وSave وDelete الموجودة عندك كما هي */}
                    </TableCell>
                </TableRow>
            );
        })}
    </TableBody>
</Table>
        </TableContainer>
      </Box>
    </>
  );
}