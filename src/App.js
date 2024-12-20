import Pages from "./components/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Spinner from "./components/reusables/Spinner.jsx";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/Layout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [googleClient, setGoogleClient] = useState(null);
  useEffect(() => {
    const googleKey = async () => {
      const { data: googleId } = await axios.get(
        "https://mphysiotech-backend.onrender.com/api/config/google"
      );
      setGoogleClient(googleId);
    };
    googleKey();
  }, [googleClient]);
  return !googleClient ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <GoogleOAuthProvider clientId={googleClient}>
      <Router>
        <ToastContainer />
        <Layout>
          <main>
            <Pages />
          </main>
        </Layout>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
