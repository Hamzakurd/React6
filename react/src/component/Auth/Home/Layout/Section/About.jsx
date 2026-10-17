import { Grid, Typography , Box } from "@mui/material";

export default function About(){
    return(
        <div>
        <Grid container spacing={4}>
            <Grid size={{sm:12 , md:6 , lg:6}} sx={{margin:"auto"}} >
            <Typography variant="h6">
                Roadster can perform at levels unlike any other production car. It goes beyond Plaid to unlock an entirely new dimension of driving.
                 It challenges the limits of design, engineering and physics to deliver an expertly crafted extra-terrestrial vehicle.
            </Typography>

        </Grid>
        <Grid size={{sm:12 , md:6 , lg:6}} sx={{margin:"auto"}}>
            <Box
            component={"img"}
            src="../../../public/RoadStar.jpg"
            sx={{borderRadius:"30px", width:{sm:"300px", md:"500px"}}}
            />

           

        </Grid>
        </Grid>
       </div>
    )
}