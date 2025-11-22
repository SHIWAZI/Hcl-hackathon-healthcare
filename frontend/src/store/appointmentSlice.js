// src/features/appointments/appointmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/appointments';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch appointments');
    return await response.json();
  }
);

export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointment) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create appointment');
    }
    return await response.json();
  }
);

export const updateAppointment = createAsyncThunk(
  'appointments/updateAppointment',
  async ({ id, appointment }) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update appointment');
    }
    return await response.json();
  }
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete appointment');
    return id;
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        const index = state.items.findIndex((appt) => appt._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.items = state.items.filter((appt) => appt._id !== action.payload);
      });
  },
});

export default appointmentSlice.reducer;
