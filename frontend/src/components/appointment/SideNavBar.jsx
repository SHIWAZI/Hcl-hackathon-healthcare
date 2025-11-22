import { NavLink } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <nav className="w-64 h-screen bg-blue-500 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Health</h2>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mb-4 px-3 py-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/appointments"
        className={({ isActive }) =>
          `mb-4 px-3 py-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
        }
      >
        Appointment
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mb-4 px-3 py-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
        }
      >
        MyProfile
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mb-4 px-3 py-2 rounded ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
        }
      >
        Services
      </NavLink>
    </nav>
  );
}
