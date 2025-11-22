import React, { useEffect, useState } from 'react'

import Header from '../components/Header'

export default function Contact() {
  const [info, setInfo] = useState({ email: 'support@example.com', phone: '+1 (555) 123-4567', address: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContact = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/contact')
        if (!res.ok) throw new Error(`Server responded ${res.status}`)
        const json = await res.json()
        if (json && json.success && json.data) {
          setInfo({ email: json.data.email || info.email, phone: json.data.phone || info.phone, address: json.data.address || info.address })
        } else {
          setError('Unexpected response')
        }
      } catch (err) {
        console.warn('Failed to load contact info from API, using fallback:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContact()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>

        {loading && <p className="mb-4">Loading contact information...</p>}
        {/* {error && <p className="mb-4 text-red-600">Unable to load contact info: {error}</p>} */}

        <div className="bg-white rounded p-6 shadow">
          <p className="mb-4">For inquiries, please reach out to us at:</p>
          <p className="font-medium">Email: {info.email}</p>
          <p className="font-medium">Phone: {info.phone}</p>
          {info.address && <p className="mt-2">Address: {info.address}</p>}
        </div>
      </div>
    </div>
  )
}
