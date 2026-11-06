import { Box, Button, Container, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function EditModal({
  openEditModal,
  setOpenEditModal,
  selectedproduct,
  updatedProducts
}) {

  const [newData, setNewData] = useState({
    name: selectedproduct.name,
    description: selectedproduct.description,
    price: selectedproduct.price,
    stock: selectedproduct.stock,
  });

  const handleSave = () => {
    const result = updatedProducts(selectedproduct.id, newData);

    if (result) {
      setOpenEditModal(false);
    }
  };

  return (
    <>
      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Container sx={{ my: "auto" }}>
            <Box
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h3">Add Product</Typography>

              <TextField
                label="Name"
                value={newData.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />

              <TextField
                label="Description"
                value={newData.description}
                onChange={(e) =>
                  setNewData({ ...newData, description: e.target.value })
                }
              />

              <TextField
                label="Price"
                type="number"
                value={newData.price}
                onChange={(e) =>
                  setNewData({ ...newData, price: e.target.value })
                }
              />

              <TextField
                label="Stock"
                type="number"
                value={newData.stock}
                onChange={(e) =>
                  setNewData({ ...newData, stock: e.target.value })
                }
              />

              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
}