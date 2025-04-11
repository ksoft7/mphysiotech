import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import "../styles/book_appointment.css";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { truncateString, truncateStringEmpty } from "../utils/truncateword.jsx";
import {
  fetchAppointments,
  deleteUserAppointment,
  cancelUserAppointment,
} from "../redux/actions/appiontmentAction.js";

function MyAppointments() {
  const dispatch = useDispatch();

  const { appointments, loading, error } = useSelector(
    (state) => state.appointments
  );
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      dispatch(deleteUserAppointment(id));
    }
  };

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch(cancelUserAppointment(id));
    }
  };

  const [activeOptions, setActiveOptions] = useState(null);

  const toggleOptions = (id) => {
    setActiveOptions(activeOptions === id ? null : id);
  };

  return (
    <>
      <div className="settingHead">
        <Link to={"/settings"}>
          <button>
            <MdOutlineKeyboardArrowLeft className="icon" />
          </button>
        </Link>
        <h1>My Appointments</h1>
        <p>&nbsp;</p>
      </div>

      <section className="appointment-list">
        {loading && <p>Loading...</p>}
        {error && <p className="error">❌ {error}</p>}

        {appointments.length === 0 ? (
          <p>No appointments Booked yet.</p>
        ) : (
          appointments.map((apt) => {
            const date = new Date(apt.date);
            const day = date.getDate();
            const month = date.toLocaleDateString("en-US", { month: "long" }); // Extract full month (e.g., February)
            return (
              <div key={apt._id} className="appointment-card">
                <article>
                  <span>
                    <p> {day}</p>
                    <p>{truncateStringEmpty(month, 3)}</p>
                  </span>
                  <p>
                    <strong
                      className={`status ${
                        apt.status === "pending"
                          ? "status-purple"
                          : apt.status === "approved"
                          ? "status-green"
                          : apt.status === "past"
                          ? "status-gray"
                          : apt.status === "canceled"
                          ? "status-red"
                          : ""
                      }`}
                    >
                      {apt.status}
                    </strong>
                  </p>
                </article>
                <article>
                  <h4 title={apt.message}>{truncateString(apt.message, 30)}</h4>
                  <h5>{apt.time}</h5>
                </article>

                {/* Options Menu */}
                <div className="options-container">
                  <button
                    className="toggle-btn"
                    onClick={() => toggleOptions(apt._id)}
                  >
                    <FaEllipsisV />
                  </button>

                  {activeOptions === apt._id && (
                    <div className="options-box">
                      <Link to={`/appiontmentDetails/${apt._id}`}>
                        <button className="btn-view">
                          <IoEyeSharp className="icon" />
                          View details
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

//  <button
// className={
//   apt.status === "canceled" ? "btn-gray" : "btn-cancel"
// }
// onClick={() => handleCancel(apt._id)}
// disabled={apt.status === "canceled"}
// >
// {apt.status === "canceled" ? "Canceled" : "Cancel"}
// </button>

// <button
// className="btn-delete"
// onClick={() => handleDelete(apt._id)}
// >
// Delete
// </button>

export default MyAppointments;
