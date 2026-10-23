
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import EvStationIcon from "@mui/icons-material/EvStation";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";

export default function Services() {
  return (
    <Box sx={{ my: 5 }}>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ mb: 4, color: "#757ce8" }}
      >
        Our Services
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
            <ElectricBoltIcon
              sx={{ fontSize: 50, color: "#757ce8" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Electric Performance
              </Typography>
              <Typography variant="body2">
                Experience powerful electric performance and exciting
                acceleration on every journey.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
            <EvStationIcon
              sx={{ fontSize: 50, color: "#757ce8" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Charging Solutions
              </Typography>
              <Typography variant="body2">
                Discover convenient charging options to keep your
                electric vehicle ready for the road.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
            <SecurityIcon
              sx={{ fontSize: 50, color: "#757ce8" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Vehicle Safety
              </Typography>
              <Typography variant="body2">
                Explore modern safety technologies designed to support
                a confident driving experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
            <BuildIcon
              sx={{ fontSize: 50, color: "#757ce8" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Maintenance Support
              </Typography>
              <Typography variant="body2">
                Learn about vehicle care and maintenance to help keep
                your car in good condition.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
