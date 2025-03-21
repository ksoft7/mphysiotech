import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../styles/settings.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { toast } from "react-toastify";
import "../App.css";
function Settings() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout()); // make sure logout returns a promise
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error("Failed to logout. Please try again.");
    }
  };
  return (
    <>
      <div className="settingHead">
        <Link to={"/"}>
          <button>
            <MdOutlineKeyboardArrowLeft className="icon" />
          </button>
        </Link>
        <h1>
          <IoSettingsOutline /> Settings
        </h1>
        <p>&nbsp;</p>
      </div>

      <section className="settingContents">
        <Link to={"/editProfile"}>
          <h3>
            <FaRegUser className="icon" /> Edit profile
          </h3>
        </Link>
        <Link to={"/myAppointments"}>
          <h3>
            <FaUserTie className="icon" /> Appointments
          </h3>
        </Link>
        <Link to={"/orders"}>
          <h3>
            <MdOutlineShoppingCart className="icon" /> Orders
          </h3>
        </Link>
        <span>
          <button style={{ cursor: "pointer" }} onClick={handleLogout}>
            <PiSignOutBold className="icon" /> Log Out
          </button>
        </span>
      </section>
    </>
  );
}

export default Settings;
