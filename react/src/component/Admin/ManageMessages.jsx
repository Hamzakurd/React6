
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import { useMessages } from "../Hooks/useMessages";

export default function ManageMessages() {
  const { messages, updatedStatus } = useMessages();

  return (
    <Container sx={{ my: 2 }}>
      <Typography variant="h2">
        Manage Messages
      </Typography>

      <Grid container spacing={4}>
        {messages.map((msg) => {
          return (
            <Grid key={msg.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Name: {msg.username}
                  </Typography>

                  <Typography variant="body2">
                    Email: {msg.userEmail || "No Email"}
                  </Typography>

                  <Typography variant="h5">
                    Message: {msg.userMessage}
                  </Typography>

                  <Rating
                    value={Number(msg.userRating) || 0}
                    readOnly
                  />

                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Status: {msg.status}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                      updatedStatus(msg.id, "rejected")
                    }
                  >
                    Reject
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() =>
                      updatedStatus(msg.id, "pending")
                    }
                  >
                    Pending
                  </Button>

                  <Button
                    variant="contained"
                    color="success"
                    onClick={() =>
                      updatedStatus(msg.id, "approved")
                    }
                  >
                    Approve
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
