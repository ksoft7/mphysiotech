import Pages from "./components/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import axios from "axios";
// import Spinner from "./components/reusables/Spinner.jsx";
// import { useState, useEffect } from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/Layout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Layout>
        <main>
          <Pages />
        </main>
      </Layout>
    </Router>
  );
}
//  "https://mphysiotech-backend.onrender.com/api/config/google"
export default App;
