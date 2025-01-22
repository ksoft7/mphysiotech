import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import Appointment from "../pages/Appointment";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import OurTeam from "../pages/OurTeam";
import PricingPlan from "../pages/PricingPlan";
import Product from "../pages/Product";
import Testimonials from "../pages/Testimonials";
// import UserLogin from "../pages/UserLogin";
// import UserSignUp from "../pages/UserSignUp";
import BlogInnerdetails from "../pages/BlogInnerdetails";
import Homepage from "../pages/Homepage";
import ProductsScreen from "../pages/productsScreen";
import Productscreen from "../pages/productscreen";
import Cartscreeen from "../pages/Cartscreeen";
import AboutuUs from "../pages/AboutuUs";
import Checkout from "../pages/Checkout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/ResgisterPage";
import EmailVerification from "../pages/EmailVerification";
import PasswordResetScreen from "../pages/PasswordReset";
import AdminDashboard from "../pages/Dashboard/dashboard.jsx";
import Admin from "../pages/Admin";
import AdminProtectedRoute from "./AdminProtectedRoute";
import UsersTab from "../pages/Dashboard/UsersTab";
import ProductsTab from "../pages/Dashboard/ProductsTab";
import Trydashboard from "./trydashboard";
import EditProduct from "../pages/Dashboard/EditProduct";
import NewBlogPostTab from "../pages/Dashboard/NewBlogPostTab";
import EditBlog from "../pages/Dashboard/EditBlog";
import BlogTab from "../pages/Dashboard/BlogTab";
import { FixedBarProvider } from "../Context/Fixcontext";
import ProductPost from "../pages/Dashboard/ProductPost";
import OrderSucessful from "../pages/OrderSuccess";
import Userorder from "../pages/UserorderHistory";
import Order from "../pages/order";
function Pages() {
  return (
    <div>
      <FixedBarProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/verify-email/:token" element={<EmailVerification />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route
            path="/password-reset/:token"
            element={<PasswordResetScreen />}
          />
          <Route path="/product/:id" element={<Productscreen />} />
          <Route path="/aboutpage" element={<AboutuUs />} />
          <Route path="/cart" element={<Cartscreeen />} />
          <Route path="/blog/:id" element={<BlogInnerdetails />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSucessful />} />
          <Route path="/order-history" element={<Userorder />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />

          <Route path="/admin" element={<Admin />} />

          {/* Admin actions */}
          <Route path="/trydashboard" element={<Trydashboard />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/users" element={<UsersTab />} />
            <Route path="/ProductsTab" element={<ProductsTab />} />
            <Route path="/Post-blog-Tab" element={<NewBlogPostTab />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/Product-Post" element={<ProductPost />} />
            <Route path="/BlogTab" element={<BlogTab />} />
            <Route path="/edit-blogPost/:id" element={<EditBlog />} />
          </Route>
        </Routes>
      </FixedBarProvider>
    </div>
  );
}

export default Pages;
