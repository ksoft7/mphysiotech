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
import { API_URL } from "../../components/constant.js";
const Base_URL = `${API_URL}/appointments`;

export const fetchAppointments = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const token = getState().user.userInfo?.token;

    if (!token) throw new Error("Login to see appointments");

    const config = { headers: { Authorization: `Bearer ${token}` } };

    const { data } = await axios.get(`${Base_URL}/myAppiontment`, config);
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

      await axios.post(Base_URL, appointmentData, config);

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

export const cancelUserAppointment =
  (appointmentId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().user.userInfo?.token;
      if (!token) throw new Error("User not authenticated");

      const config = { headers: { Authorization: `Bearer ${token}` } };

      const { data } = await axios.put(
        `${Base_URL}/cancelAppointment/${appointmentId}`,
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

export const deleteUserAppointment =
  (appointmentId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().user.userInfo?.token;
      if (!token) throw new Error("User not authenticated");

      const config = { headers: { Authorization: `Bearer ${token}` } };

      await axios.delete(
        `${Base_URL}/deleteMyAppointment/${appointmentId}`,
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
