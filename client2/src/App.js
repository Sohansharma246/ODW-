import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./Component/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./Component/Routes/Adminroute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import Profile from "./pages/user/Profile";
import Order from  "./pages/user/Order";
import Product from "./pages/Admin/Product";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Categoryproduct from "./pages/Categoryproduct";
import Cartpage from "./pages/Cartpage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Toaster />  {/* Move Toaster outside of Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<Categoryproduct />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/dashboard" element={<PrivateRoute />} >
        <Route path="user" element={<Dashboard/>} />
        <Route path="user/orders" element={<Order/>} />
        <Route path="user/profile" element={<Profile/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />} >
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-category" element={<CreateCategory/>} />
        <Route path="admin/create-product" element={<CreateProduct/>} />
        <Route path="admin/products" element={<Product/>} />
        <Route path="admin/product/:slug" element={<UpdateProduct/>} />
        <Route path="admin/orders" element={<AdminOrders/>} />
        <Route path="admin/user" element={<User/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
