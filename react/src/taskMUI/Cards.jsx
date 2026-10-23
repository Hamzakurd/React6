
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

export default function Cards() {
  return (
    <Box sx={{ my: 5 }}>
      

      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 6, lg: 3 }}>
          <Card>
            <CardHeader title="Hamza" />

            <CardMedia
              component="img"
              image="/RoadStar.jpg"
              alt="Hamza"
              sx={{ height: 200, objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="body1">
                It is absolutely amazing
              </Typography>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
         <Grid size={{ sm: 12, md: 6, lg: 3 }}>
          <Card>
            <CardHeader title="Ahmad" />

            <CardMedia
              component="img"
              image="/RoadStar.jpg"
              alt="Hamza"
              sx={{ height: 200, objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="body1">
                It is absolutely amazing
              </Typography>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
         <Grid size={{ sm: 12, md: 6, lg: 3 }}>
          <Card>
            <CardHeader title="Saif" />

            <CardMedia
              component="img"
              image="/RoadStar.jpg"
              alt="Hamza"
              sx={{ height: 200, objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="body1">
                It is absolutely amazing
              </Typography>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
         <Grid size={{ sm: 12, md: 6, lg: 3 }}>
          <Card>
            <CardHeader title="Saad" />

            <CardMedia
              component="img"
              image="/RoadStar.jpg"
              alt="Hamza"
              sx={{ height: 200, objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="body1">
                It is absolutely amazing
              </Typography>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
