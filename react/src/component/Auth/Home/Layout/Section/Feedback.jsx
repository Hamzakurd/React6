import{Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography}from "@mui/material"
import StarIcon from "@mui/icons-material/Star";

export default function Feedback(){
    return(
        <Box sx={{my:5}}>
            <Typography variant="h2">Reviews!</Typography>
            <Grid container spacing={4}>
                <Grid size={{sm:12 , md:6 , lg:3}}>
                    <Card>
                        <CardHeader title="Hamza"/>
                        <CardMedia component={"img"} src="../../../public/images.jpg"/>
                        <CardContent>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Officia rem animi nobis sequi incidunt.
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                  
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{sm:12 , md:6 , lg:3}}>
                    <Card>
                        <CardHeader title="Omar"/>
                         <CardMedia component={"img"} src="../../../public/images.jpg"/>
                        <CardContent>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Officia rem animi nobis sequi incidunt.
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                  
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{sm:12 , md:6 , lg:3}}>
                    <Card>
                        <CardHeader title="Aboud"/>
                         <CardMedia component={"img"} src="../../../public/images.jpg"/>
                        <CardContent>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Officia rem animi nobis sequi incidunt.
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                  
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{sm:12 , md:6 , lg:3}}>
                    <Card>
                        <CardHeader title="Emad"/>
                         <CardMedia component={"img"} src="../../../public/images.jpg"/>
                        <CardContent>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                 Officia rem animi nobis sequi incidunt.
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                  
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}