import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import Header from "../../component/layout/Header";
import Footer from "../../component/Layout/Footer";
import { useProducts } from "../../component/Hooks/UseProduct";

export default function LandinPage() {
  const {
  products,
  product,
  getProductById
} = useProducts();
  return (
    <>
      <Header />
      <Container sx={{ my: 3, minHeight: "100vh" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center" }}
        >
          Welcome
        </Typography>
        <Grid container spacing={4}>
          {products.map((prod)=>{
            return(
              <Grid key={prod.id} size={{sm:1 , md: 4 ,lg:6}}>
                <Card>
                  <CardContent>
                    <Typography variant="h4">{prod.name}</Typography>
                    <Typography variant="h3">{prod.price} || {prod.stock}</Typography>
                    <Typography variant="body2">{prod.description}</Typography>
                  </CardContent>
                  <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained">View</Button>
                    <Button variant="contained">Buy</Button>
                  </CardActions>
                </Card>
                </Grid>

            );
          })}

        </Grid>
      </Container>
      <Footer />
    </>
  );
}