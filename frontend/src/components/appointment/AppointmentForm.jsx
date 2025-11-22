// src/features/appointments/AppointmentForm.jsx
import React from 'react';

function AppointmentForm({
  patientId, setPatientId,
  providerId, setProviderId,
  serviceId, setServiceId,
  appointmentDate, setAppointmentDate,
  status, setStatus,
  notes, setNotes,
  onSubmit,
  onCancel,
  isEditing
}) {
  return (
    <form onSubmit={onSubmit} className="mb-4 border p-4 rounded bg-gray-50">
      {/* Inputs for patientId, providerId, serviceId, date, status, notes as before */}
      <div className="mb-2">
        <label className="block mb-1">Patient ID:</label>
        <input
          type="text"
          value={patientId}
          onChange={e => setPatientId(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Provider ID:</label>
        <input
          type="text"
          value={providerId}
          onChange={e => setProviderId(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Service ID:</label>
        <input
          type="text"
          value={serviceId}
          onChange={e => setServiceId(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Appointment Date & Time:</label>
        <input
          type="datetime-local"
          value={appointmentDate}
          onChange={e => setAppointmentDate(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Status:</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
          className="border rounded p-2 w-full"
        >
          <option value="">Select status</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Notes:</label>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          className="border rounded p-2 w-full"
          rows={3}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        {isEditing ? 'Update' : 'Submit'}
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-400 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </form>
  );
}

export default AppointmentForm;
