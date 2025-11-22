import React from 'react'
import { useNavigate } from 'react-router'

export default function Sidebar() {

    const navigate = useNavigate();

    const redirect = path => {
        navigate(path)
    }
    return (
        <div className='bg-[#1f92df] w-64 p-4 text-white'>
            <h1 className='text-2xl font-bold'>Health</h1>
            <nav className='mt-8'>
                <ul>
                    <li className='mb-1 hover:bg-[#187bbd] p-2 rounded'>
                        <p role="button" className='cursor-pointer' onClick={() => redirect("/service-provider/dashboard")}>Dashboard</p>
                    </li>
                    <li className='mb-1 hover:bg-[#187bbd] p-2 rounded'>
                        <p role="button" className='cursor-pointer' onClick={() => redirect("/service-provider/patients")}>Patients</p>
                    </li>

                    <li className='mb-1 hover:bg-[#187bbd] p-2 rounded'>
                        <p role="button" className='cursor-pointer' onClick={() => redirect("/service-provider/goals")}>Goals</p>
                    </li>
                    <li className='mb-1 hover:bg-[#187bbd] p-2 rounded'>
                        <p role="button" className='cursor-pointer' onClick={() => redirect("/service-provider/appointments")}>Appointments</p>
                    </li>
                    <li className='mb-1 hover:bg-[#187bbd] p-2 rounded'>
                        <p role="button" className='cursor-pointer' onClick={() => redirect("/service-provider/settings")}>Settings</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
