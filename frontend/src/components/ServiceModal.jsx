import React from 'react'

export default function ServiceModal({ open, service, loading, error, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 z-10">
        <button className="absolute top-3 right-3 text-gray-600" onClick={onClose}>✕</button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && service && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            {service.provider && (
              <p className="text-sm text-gray-600">Provided by: {service.provider.providerName || service.provider}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
