import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

export default function ServiceDetails() {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/services/${id}`)
        if (!res.ok) throw new Error(`Server responded ${res.status}`)
        const json = await res.json()
        if (json && json.success && json.data) {
          setService(json.data)
        } else {
          setError('Service not found')
        }
      } catch (err) {
        console.warn('Failed to load service from API:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    // If id looks like a static fallback id, show a simple static object
    if (id && id.startsWith('static-')) {
      const idx = parseInt(id.split('-')[1], 10)
      const fallback = [
        { serviceName: 'COVID-19 Updates', description: 'Stay informed about the latest COVID-19 guidelines and vaccination information.' },
        { serviceName: 'Seasonal Flu Prevention', description: 'Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.' },
        { serviceName: 'Mental Health Awareness', description: 'Explore resources and support options for maintaining good mental health.' },
      ][idx] || null
      setService(fallback)
      setLoading(false)
    } else {
      fetchService()
    }
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>
  if (!service) return <div className="p-6">No service data</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <h2 className="text-2xl font-semibold mb-3">{service.serviceName || service.title}</h2>
          <p className="text-gray-700">{service.description}</p>
          {service.providerId && (
            <p className="mt-4 text-sm text-gray-600">Provided by: {service.providerId.providerName || service.providerId}</p>
          )}
        </div>
      </div>
    </div>
  )
}
