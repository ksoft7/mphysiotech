import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../redux/actions/userActions";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/settings.css";
import "../App.css";

function EditProfile() {
  const dispatch = useDispatch();
  const { userInfo, loading, error, success } = useSelector(
    (state) => state.user
  );

  // Use local state only for input values
  const [formData, setFormData] = useState({
    name: userInfo?.name || "",
    email: userInfo?.email || "",
  });

  // Sync state when userInfo updates
  useEffect(() => {
    if (userInfo) {
      setFormData({ name: userInfo.name, email: userInfo.email });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  return (
    <>
      <div className="settingHead ">
        <Link to={"/settings"}>
          <button>
            <MdOutlineKeyboardArrowLeft />
          </button>
        </Link>
        <h1>Edit Profile</h1>
        <p>&nbsp;</p>
      </div>
      <figure className="userImgname">
        <p>{userInfo?.name || "User"}</p>
      </figure>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Profile updated successfully!</p>}
      <form onSubmit={handleSubmit} className="upPro">
        <span>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </span>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </>
  );
}

export default EditProfile;
