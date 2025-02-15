import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  appointments: [],
  appointment: null,
  appointmentCreated: false,
  appointmentCancelled: false,
  appointmentDeleted: false,
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointments: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.appointments = payload;
    },
    setAppointment: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.appointment = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    createAppointmentRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.appointmentCreated = false;
    },
    createAppointmentSuccess: (state) => {
      state.loading = false;
      state.appointmentCreated = true;
    },
    createAppointmentFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.appointmentCreated = false;
    },
    cancelAppointment: (state, { payload }) => {
      state.appointments = state.appointments.map((appointment) =>
        appointment._id === payload._id ? payload : appointment
      );
      state.appointmentCancelled = true;
    },
    deleteAppointment: (state, { payload }) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment._id !== payload
      );
      state.appointmentDeleted = true;
    },
    resetFlags: (state) => {
      state.appointmentCreated = false;
      state.appointmentCancelled = false;
      state.appointmentDeleted = false;
    },
  },
});

export const {
  setLoading,
  setError,
  setAppointments,
  setAppointment,
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentFailure,
  cancelAppointment,
  deleteAppointment,
  resetFlags,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
export const appointmentSelector = (state) => state.appointments;
