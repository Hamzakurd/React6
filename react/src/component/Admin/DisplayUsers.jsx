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

  const [role, setNewRole] = useState("");
  const [isUpdated, setIsUpdated] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleSave = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    updateUser(isUpdated, role);
    setIsUpdated(null);
    setNewRole("");
  };

  return (
    <Box>
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

      <TableContainer sx={{ width: "100%", overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(users ?? []).map((user, idx) => (
              <TableRow key={user.id}>
                <TableCell>{idx + 1}</TableCell>

                <TableCell>{user.name}</TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  {isUpdated === user.id ? (
                    <FormControl fullWidth>
                      <InputLabel>Role</InputLabel>

                      <Select
                        value={role}
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

                <TableCell>
                  {isUpdated === user.id ? (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleSave}
                        sx={{ mr: 1 }}
                      >
                        Save
                      </Button>

                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => {
                          setIsUpdated(null);
                          setNewRole("");
                        }}
                        sx={{ mr: 1 }}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => {
                        setIsUpdated(user.id);
                        setNewRole(user.role);
                      }}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {(users ?? []).length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}