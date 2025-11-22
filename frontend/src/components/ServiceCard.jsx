import React from 'react'

export default function ServiceCard({ id, title, description, onOpen }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button onClick={() => onOpen(id)} className="bg-blue-500 text-white px-4 py-2 rounded inline-block">Read More</button>
    </div>
  )
}
