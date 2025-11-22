import React from 'react'
import { Outlet } from 'react-router'

export default function ServiceProviderLayout() {
    return (
        <div>
            ServiceProvider
            <Outlet />
        </div>
    )
}
