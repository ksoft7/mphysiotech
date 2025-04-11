import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import Appointment from "../pages/Appointment";
import Faq from "../pages/Faq";
import OurTeam from "../pages/OurTeam";
import PricingPlan from "../pages/PricingPlan";
import Product from "../pages/Product";
import Testimonials from "../pages/Testimonials";
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
import { FixedBarProvider } from "../Context/Fixcontext";
import OrderSucessful from "../pages/OrderSuccess";
import Userorder from "../pages/UserorderHistory";
import Settings from "../pages/settings";
import EditProfile from "../pages/EditProfile";
import MyAppointment from "../pages/myAppointments";
import AppiontmentDetails from "../pages/appiontmentDetails";
import Order from "../pages/order";
function Pages() {
  return (
    <div>
      <FixedBarProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
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
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/myAppointments" element={<MyAppointment />} />
          <Route
            path="/appiontmentDetails/:id"
            element={<AppiontmentDetails />}
          />
          <Route path="/settings" element={<Settings />} />

          {/* 404 - Redirect Unknown Routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </FixedBarProvider>
    </div>
  );
}

export default Pages;
