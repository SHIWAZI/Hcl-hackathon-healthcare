import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../store/appointmentSlice.js';
import Appointment from '../routes/Appointment.jsx';

// Mock the AppointmentForm component
vi.mock('../components/appointment/AppointmentForm.jsx', () => ({
  default: ({ onSubmit, onCancel, isEditing }) => (
    <form onSubmit={onSubmit}>
      <label>
        Patient ID
        <input type="text" name="patientId" defaultValue="P123" />
      </label>
      <label>
        Provider ID
        <input type="text" name="providerId" defaultValue="PR123" />
      </label>
      <label>
        Service ID
        <input type="text" name="serviceId" defaultValue="S123" />
      </label>
      <label>
        Appointment Date
        <input type="datetime-local" name="appointmentDate" defaultValue="2024-12-01T10:00" />
      </label>
      <label>
        Status
        <input type="text" name="status" defaultValue="Scheduled" />
      </label>
      <label>
        Notes
        <input type="text" name="notes" defaultValue="Test notes" />
      </label>
      <button type="submit">{isEditing ? 'Update' : 'Save'}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  ),
}));

const createMockStore = (preloadedState = {}) => {
  return configureStore({
    reducer: { appointments: appointmentReducer },
    preloadedState: preloadedState || {
      appointments: {
        items: [],
        status: 'idle',
        error: null,
      },
    },
  });
};

const renderWithRedux = (component, { preloadedState } = {}) => {
  const store = createMockStore(preloadedState);
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Appointment component', () => {
  test('renders heading and create button', () => {
    renderWithRedux(<Appointment />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Appointment Page');
    expect(screen.getByRole('button', { name: /create new appointment/i })).toBeInTheDocument();
  });

  test('displays no appointments message when list is empty', () => {
    renderWithRedux(<Appointment />);

    expect(screen.getByText(/no appointments found/i)).toBeInTheDocument();
  });

  test('opens form on create button click', async () => {
    renderWithRedux(<Appointment />);

    const createButton = screen.getByRole('button', { name: /create new appointment/i });
    await userEvent.click(createButton);

    expect(screen.getByText(/save/i)).toBeInTheDocument();
  });

  test('displays appointments in table', () => {
    const mockAppointments = [
      {
        _id: '1',
        patientId: 'P001',
        providerId: 'PR001',
        serviceId: 'S001',
        appointmentDate: '2024-12-01T10:00:00.000Z',
        status: 'Scheduled',
        notes: 'Follow-up visit',
      },
    ];

    renderWithRedux(<Appointment />, {
      preloadedState: {
        appointments: {
          items: mockAppointments,
          status: 'succeeded',
          error: null,
        },
      },
    });

    expect(screen.getByText('P001')).toBeInTheDocument();
    expect(screen.getByText('S001')).toBeInTheDocument();
    expect(screen.getByText('Scheduled')).toBeInTheDocument();
  });

  test('shows loading message when status is loading', () => {
    renderWithRedux(<Appointment />, {
      preloadedState: {
        appointments: {
          items: [],
          status: 'loading',
          error: null,
        },
      },
    });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('shows error message when error exists', () => {
    renderWithRedux(<Appointment />, {
      preloadedState: {
        appointments: {
          items: [],
          status: 'failed',
          error: 'Failed to fetch appointments',
        },
      },
    });

    expect(screen.getByText(/error: failed to fetch appointments/i)).toBeInTheDocument();
  });

  test('closes form on cancel button click', async () => {
    renderWithRedux(<Appointment />);

    const createButton = screen.getByRole('button', { name: /create new appointment/i });
    await userEvent.click(createButton);

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    expect(screen.queryByText(/save/i)).not.toBeInTheDocument();
  });

  test('displays edit and delete buttons for each appointment', () => {
    const mockAppointments = [
      {
        _id: '1',
        patientId: 'P001',
        providerId: 'PR001',
        serviceId: 'S001',
        appointmentDate: '2024-12-01T10:00:00.000Z',
        status: 'Scheduled',
        notes: 'Test',
      },
    ];

    renderWithRedux(<Appointment />, {
      preloadedState: {
        appointments: {
          items: mockAppointments,
          status: 'succeeded',
          error: null,
        },
      },
    });

    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });
});
