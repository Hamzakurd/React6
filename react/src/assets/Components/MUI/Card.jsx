
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography
} from "@mui/material";

export default function Cards() {
  return (
    <Container sx={{ alignItems: "center", mt: "240px" }}>
      <Card sx={{ maxWidth: "300px" }}>
        <CardHeader title="Card" />
        <CardMedia
         component={"img"}
         src="../../assets/hero.png"
         alt= "this is image"
        
        />
        <CardContent>
          <Typography variant="h4" >
            Title
          </Typography>

          <Typography variant="body1">
            Descriptions
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined">View</Button>
          <Button variant="contained" >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
