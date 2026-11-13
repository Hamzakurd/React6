


import Home from "./Pages/Home/Home";
import Landingpage from "./Pages/LandPages/LandingPage";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./component/Admin/AdminDashboard";
import AdminLayout from "./component/Admin/AdminLayout";
import DisplayProducts from "./component/Admin/DisplayProducts"
import DisplayUsers from "./component/Admin/DisplayUsers";
import Contact from "./component/Contact/Contact";
import ManageMessages from "./component/Admin/ManageMessages"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      
      <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} />
  <Route path="manage-products" element={<DisplayProducts />} />
  <Route path="manage-users" element={<DisplayUsers />} />
  <Route path="manage-messages" element={<ManageMessages />} />
</Route>
    </Routes>
  );
}

export default App;
