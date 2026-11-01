
import {
  Box,
  Button,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Modal
} from "@mui/material";

import { useState } from "react";

export default function DisplayProducts() {

  const [openForm, setOpenForm] = useState(false);

  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4
  };

  return (
    <>
      <Box sx={{ width: "100%", textAlign: "center" }}>

        <Typography variant="h3">
          Manage Products
        </Typography>

        <Button
          variant="contained"
          sx={{ m: 3 }}
          onClick={() => setOpenForm(!openForm)}
        >
          Add Product
        </Button>

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
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product, idx) => {
                return (
                  <TableRow key={product.id}>

                    <TableCell align="center">
                      {idx + 1}
                    </TableCell>

                    <TableCell align="center">
                      {product.name}
                    </TableCell>

                    <TableCell align="center">
                      {product.description}
                    </TableCell>

                    <TableCell align="center">
                      <Button color="warning">
                        Edit
                      </Button>

                      <Button
                        color="error"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>

                  </TableRow>
                );
              })}
            </TableBody>

          </Table>
        </TableContainer>

      </Box>

      <Modal
        open={openForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Product Form
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
