import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="max-w-6xl mx-auto px-4 py-12">
                <section className="bg-white rounded-lg shadow p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-3">Welcome to the Healthcare Portal</h2>
                            <p className="text-gray-700 mb-4">Find the latest health topics, available services, and contact information for care providers. Browse guidance, get connected, and stay informed.</p>
                            <div className="flex gap-3">
                                <Link to="/services" className="bg-blue-600 text-white px-4 py-2 rounded">View Services</Link>
                                <Link to="/health-topics" className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Health Topics</Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <img src="/public/health-illustration.png" alt="Healthcare" className="rounded shadow" onError={(e)=>{e.target.style.display='none'}} />
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Link to="/services" className="block bg-white rounded-lg shadow p-6 hover:shadow-md">
                        <h3 className="font-semibold text-lg mb-2">Services</h3>
                        <p className="text-gray-600">See available healthcare services and read details about each offering.</p>
                    </Link>

                    <Link to="/health-topics" className="block bg-white rounded-lg shadow p-6 hover:shadow-md">
                        <h3 className="font-semibold text-lg mb-2">Health Topics</h3>
                        <p className="text-gray-600">Browse articles and guidance on nutrition, exercise, mental health and more.</p>
                    </Link>

                    <Link to="/contact" className="block bg-white rounded-lg shadow p-6 hover:shadow-md">
                        <h3 className="font-semibold text-lg mb-2">Contact</h3>
                        <p className="text-gray-600">Get contact info for support and provider inquiries.</p>
                    </Link>
                </section>

                <section className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-2">About this portal</h3>
                    <p className="text-gray-700">This portal is a simple demo of a health information and services directory. It connects a React frontend with a Node/Express backend and stores service/provider data in MongoDB. Use the navigation above to explore content.</p>
                </section>
            </main>
        </div>
    )
}
