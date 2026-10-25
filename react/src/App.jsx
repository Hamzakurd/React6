


import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/LandPages/LandingPage";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./component/Admin/AdminDashboard";
import AdminLayout from "./component/Admin/AdminLayout";
import DisplayProduct from "./component/Admin/DisplayProducts"
import DisplayUsers from "./component/Admin/DisplayUsers";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index path="dashboard" element={<AdminDashboard />}/>
        <Route path="manage-products" element={<DisplayProduct/>}/>
        <Route path="manage-users" element={<DisplayUsers/>}/>
      </Route>
    </Routes>
  );
}

export default App;
