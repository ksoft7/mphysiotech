import React, { useState, useMemo, useEffect } from "react";
import "../App.css";
import Footer from "../components/reusables/Footer.jsx";
import "../styles/book_appointment.css";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../redux/actions/appiontmentAction.js";

function Appointment() {
  const dispatch = useDispatch();

  // ✅ Use memoization to prevent unnecessary re-renders
  const appointmentState = useSelector((state) => state.appointments);
  const { loading, error, appointmentCreated } = useMemo(
    () => appointmentState,
    [appointmentState]
  );

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    message: "",
  });

  // ✅ Reset form after successful submission
  useEffect(() => {
    if (appointmentCreated) {
      setFormData({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        date: "",
        time: "",
        message: "",
      });
    }
  }, [appointmentCreated]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAppointment(formData));
  };

  return (
    <>
      <section className="hero_section herosm">
        <h1>Book Appointment</h1>
        <p>
          Homepage / <span>Book Appointment</span>
        </p>
      </section>

      <section className="form-cont">
        <div className="headings-form">
          <h6>. Our Team</h6>
          <h3>Book Appointment</h3>
          <p>
            Schedule an appointment with our specialist Musculoskeletal/Sport
            Physiotherapist, boasting over 9 years of expertise in treating back
            pain, sports injuries, trauma cases, and post-surgical
            rehabilitation.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="appointment_form">
        {appointmentCreated && (
          <p className="success">✅ Appointment Created Successfully!</p>
        )}
        {error && <p className="error">❌ {error}</p>}

        <div className="inputHol">
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            value={formData.fName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            value={formData.lName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <span>
          {/* <p>
            <input type="checkbox" name="check" /> Email Subscribe
          </p> */}
          <button className="btn-style" type="submit" disabled={loading}>
            {loading ? "Booking..." : "Book Now"}
          </button>
        </span>
      </form>

      <Footer />
    </>
  );
}

export default Appointment;
