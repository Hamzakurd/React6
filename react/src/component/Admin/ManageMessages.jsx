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

export default function ManageMassage() {
  const { messages } = useMessages();

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

                  <Rating value={Number(msg.userRating) || 0} readOnly />
                </CardContent>

                <CardActions>
                  <Button variant="contained" color="error">
                    Reject
                  </Button>

                  <Button variant="contained" color="success">
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