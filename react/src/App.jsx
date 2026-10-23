

import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/LandPages/LandingPage";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
