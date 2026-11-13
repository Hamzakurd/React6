
import {
  Button,
  Container,
  Divider,
  Paper,
  Rating,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import Header from "../layout/Header";
import { useState } from "react";
import { useMessages } from "../Hooks/useMessages";

export default function Contact() {
  const { createMessage, messages } = useMessages();

  const [newMessage, setNewMessage] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  // Show only approved messages
  const approvedMessages = messages.filter(
    (msg) => msg.status === "approved"
  );

  const handleSendMessage = async () => {
    if (!newMessage.name.trim() || !newMessage.message.trim()) {
      return;
    }

    const success = await createMessage(newMessage);

    if (success) {
      setNewMessage({
        name: "",
        email: "",
        message: "",
        rating: 0,
      });
    }
  };

  return (
    <>
      <Header />

      <Container sx={{ my: 4 }}>
        {/* Contact Form */}
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
            p: 3,
          }}
        >
          <Typography variant="h3">
            Leave Your Comment!
          </Typography>

          <Divider>STAY IN TOUCH!</Divider>

          <TextField
            label="Name"
            required
            value={newMessage.name}
            onChange={(e) =>
              setNewMessage({
                ...newMessage,
                name: e.target.value,
              })
            }
          />

          <TextField
            label="Email"
            value={newMessage.email}
            onChange={(e) =>
              setNewMessage({
                ...newMessage,
                email: e.target.value,
              })
            }
          />

          <TextField
            label="Message"
            minRows={3}
            multiline
            required
            value={newMessage.message}
            onChange={(e) =>
              setNewMessage({
                ...newMessage,
                message: e.target.value,
              })
            }
          />

          <Typography>Leave Your Rating:</Typography>

          <Rating
            name="simple-controlled"
            value={newMessage.rating}
            onChange={(event, newValue) =>
              setNewMessage({
                ...newMessage,
                rating: newValue ?? 0,
              })
            }
          />

          <Button
            variant="contained"
            onClick={handleSendMessage}
          >
            Send Your Message
          </Button>
        </Paper>

        {/* Approved User Reviews */}
        <Typography
          variant="h4"
          sx={{ mt: 5, mb: 3, textAlign: "center" }}
        >
          Customer Reviews
        </Typography>

        <Grid container spacing={3}>
          {approvedMessages.map((msg) => (
            <Grid
              key={msg.id}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <Card
                elevation={3}
                sx={{ height: "100%" }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {msg.username}
                  </Typography>

                  <Rating
                    value={Number(msg.userRating) || 0}
                    readOnly
                  />

                  <Typography
                    variant="body1"
                    sx={{ mt: 2 }}
                  >
                    {msg.userMessage}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {approvedMessages.length === 0 && (
          <Typography
            sx={{ textAlign: "center", mt: 3 }}
          >
            No approved reviews yet.
          </Typography>
        )}
      </Container>
    </>
  );
}
