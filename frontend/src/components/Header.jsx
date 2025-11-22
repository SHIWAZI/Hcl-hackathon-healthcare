import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ title = 'Healthcare Portal' }) {
  return (
    <header className="bg-blue-500">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <nav className="bg-blue-700">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ul className="flex gap-6 justify-center text-white">
            <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/health-topics" className="hover:underline">Health Topics</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

