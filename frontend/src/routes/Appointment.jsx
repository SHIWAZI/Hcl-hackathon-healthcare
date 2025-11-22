// src/features/appointments/Appointment.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../store/appointmentSlice.js';
import AppointmentForm from '../components/appointment/AppointmentForm.jsx';
import SideNavbar from '../components/appointment/SideNavBar.jsx';


export default function Appointment() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.items);
  const loadingStatus = useSelector((state) => state.appointments.status);
  const error = useSelector((state) => state.appointments.error);

  const [showForm, setShowForm] = useState(false);
  const [editingAppointmentId, setEditingAppointmentId] = useState(null);
  const [patientId, setPatientId] = useState('');
  const [providerId, setProviderId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (loadingStatus === 'idle') {
      dispatch(fetchAppointments());
    }
  }, [dispatch, loadingStatus]);

  // Util function for date formatting
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return {
      date: date.toISOString().split('T')[0],
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingAppointmentId(null);
    setPatientId('');
    setProviderId('');
    setServiceId('');
    setAppointmentDate('');
    setStatus('');
    setNotes('');
  };

  const handleCreateClick = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEditClick = (appointment) => {
    setEditingAppointmentId(appointment._id);
    setPatientId(appointment.patientId || '');
    setProviderId(appointment.providerId || '');
    setServiceId(appointment.serviceId || '');
    setAppointmentDate(new Date(appointment.appointmentDate).toISOString().slice(0,16));
    setStatus(appointment.status || '');
    setNotes(appointment.notes || '');
    setShowForm(true);
  };

  const handleDeleteClick = (id) => {
    if(window.confirm('Are you sure you want to delete this appointment?')) {
      dispatch(deleteAppointment(id));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const appointmentPayload = {
      patientId,
      providerId,
      serviceId,
      appointmentDate,
      status,
      notes,
    };

    try {
      if (editingAppointmentId) {
        await dispatch(updateAppointment({ id: editingAppointmentId, appointment: appointmentPayload })).unwrap();
      } else {
        await dispatch(createAppointment(appointmentPayload)).unwrap();
      }
      resetForm();
    } catch (err) {
      alert(err.message || 'Failed to save appointment');
    }
  };

  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex-1 p-6">
    <div>
      <button
        onClick={handleCreateClick}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Create New Appointment
      </button>

      {showForm && (
        <AppointmentForm
          patientId={patientId} setPatientId={setPatientId}
          providerId={providerId} setProviderId={setProviderId}
          serviceId={serviceId} setServiceId={setServiceId}
          appointmentDate={appointmentDate} setAppointmentDate={setAppointmentDate}
          status={status} setStatus={setStatus}
          notes={notes} setNotes={setNotes}
          onSubmit={handleFormSubmit}
          onCancel={resetForm}
          isEditing={!!editingAppointmentId}
        />
      )}

      {loadingStatus === 'loading' && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">#</th>
              <th className="py-2 px-4 border-b border-gray-200">Patient ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Provider ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Service ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Time</th>
              <th className="py-2 px-4 border-b border-gray-200">Status</th>
              <th className="py-2 px-4 border-b border-gray-200">Notes</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          {appointments.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="9" className="text-center py-4">No appointments found.</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {appointments.map((appointment, index) => {
                const { date, time } = formatDateTime(appointment.appointmentDate);
                return (
                  <tr key={appointment._id}>
                    <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.patientId}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.providerId}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.serviceId}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{date}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{time}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.status}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.notes}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <button onClick={() => handleEditClick(appointment)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteClick(appointment._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>

    </main>
    </div>
  );
}
