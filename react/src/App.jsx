

import { Container } from "@mui/material";
import Header from "./component/Auth/Home/Layout/Header.jsx";
import About from "./component/Auth/Home/Layout/Section/About.jsx";
import Cards from "./component/Auth/Home/Layout/taskMUI/Cards.jsx";
import Footer from "./component/Auth/Home/Layout/taskMUI/Footer.jsx";
import Services from "./component/Auth/Home/Layout/taskMUI/Services.jsx";

function App() {
  return (
    <>
   
      <Header />
      <Container sx={{my:4 , minHeight:"100vh"}}>
      <br/>
      <br/>
      <About/>
      <br/>
      <br/>
      <Cards />
      <br/>
      <Services/>
      </Container>
      
    
    <Footer/>
    </>
  );
}

export default App;