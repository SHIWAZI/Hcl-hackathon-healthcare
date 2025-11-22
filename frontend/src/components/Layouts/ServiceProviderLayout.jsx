import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Sidebar'

export default function ServiceProviderLayout() {
    return (
        <div className='flex h-[100vh]'>
            <Sidebar />
            <div className='grow bg-[#edebeb] p-6 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}
