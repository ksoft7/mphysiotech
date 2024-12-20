import React, { useState, useEffect } from "react";
import "../App.css";
import "../styles/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../redux/actions/AdminActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "../assets/imgs/3dAva.webp";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { adminInfo, loading, error } = useSelector((state) => state.admin);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(email, password));
  };

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin-dashboard");
      toast.success("Login successful!");
    } else if (error) {
      toast.error(error);
    }
  }, [adminInfo, navigate, error]);

  return (
    <main className="adminCov">
      <section className="adminAuth">
        <h2>Admin Login</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <span>
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </span>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
