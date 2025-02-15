import axios from "axios";
import {
  setLoading,
  setError,
  setAppointments,
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentFailure,
  cancelAppointment,
  deleteAppointment,
} from "../slices/appointment.js";

const API_URL = "https://mphysiotech-backend.onrender.com/api/appointments"; // ✅ Fixed trailing slash issue

// ✅ Fetch Appointments
export const fetchAppointments = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const token = getState().user.userInfo?.token;

    if (!token) throw new Error("Login to see appointments");

    const config = { headers: { Authorization: `Bearer ${token}` } };

    const { data } = await axios.get(`${API_URL}/myAppiontment`, config);
    dispatch(setAppointments(data.appointments));
  } catch (error) {
    dispatch(
      setError(
        error?.response?.data?.message ||
          error.message ||
          "Error fetching appointments"
      )
    );
  }
};

// ✅ Create Appointment
export const createAppointment =
  (appointmentData) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      dispatch(createAppointmentRequest()); // Set loading to true

      const token = getState().user.userInfo?.token;

      if (!token) throw new Error("User not authenticated");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(API_URL, appointmentData, config);

      dispatch(createAppointmentSuccess());
    } catch (error) {
      dispatch(
        createAppointmentFailure(
          error?.response?.data?.message ||
            error.message ||
            "Something went wrong"
        )
      );
    }
  };

// ✅ Cancel Appointment
export const cancelUserAppointment =
  (appointmentId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().user.userInfo?.token;
      if (!token) throw new Error("User not authenticated");

      const config = { headers: { Authorization: `Bearer ${token}` } };

      const { data } = await axios.put(
        `${API_URL}/cancelAppointment/${appointmentId}`,
        {},
        config
      );

      dispatch(cancelAppointment(data.appointment));
    } catch (error) {
      dispatch(
        setError(
          error?.response?.data?.message ||
            error.message ||
            "Error cancelling appointment"
        )
      );
    }
  };

// ✅ Delete Appointment
export const deleteUserAppointment =
  (appointmentId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().user.userInfo?.token;
      if (!token) throw new Error("User not authenticated");

      const config = { headers: { Authorization: `Bearer ${token}` } };

      await axios.delete(
        `${API_URL}/deleteMyAppointment/${appointmentId}`,
        config
      );

      dispatch(deleteAppointment(appointmentId));
    } catch (error) {
      dispatch(
        setError(
          error?.response?.data?.message ||
            error.message ||
            "Error deleting appointment"
        )
      );
    }
  };
