import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const ServiceCard = ({ id, title, description, onOpen }) => (
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <button onClick={() => onOpen(id)} className="bg-blue-500 text-white px-4 py-2 rounded inline-block">Read More</button>
  </div>
)

const STATIC_SERVICES = [
  { title: 'COVID-19 Updates', description: 'Stay informed about the latest COVID-19 guidelines and vaccination information.' },
  { title: 'Seasonal Flu Prevention', description: 'Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.' },
  { title: 'Mental Health Awareness', description: 'Explore resources and support options for maintaining good mental health.' },
]

 export default function Services() {
   // Local state (fallback single-file implementation). We initialize with static items so UI shows
   // something immediately while attempting to fetch from the API.
   const [services, setServices] = useState(STATIC_SERVICES.map((s, i) => ({ id: `static-${i}`, title: s.title, description: s.description })))
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [modalOpen, setModalOpen] = useState(false)
   const [selectedService, setSelectedService] = useState(null)
   const [modalLoading, setModalLoading] = useState(false)
   const [modalError, setModalError] = useState(null)

  useEffect(() => {
    // Fetch services from backend on initial load. Falls back to static list on error.
    const fetchServices = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/services')
        if (!res.ok) throw new Error(`Server responded ${res.status}`)
        const json = await res.json()
        if (json && json.success && Array.isArray(json.data)) {
          setServices(json.data.map((s, i) => ({ id: s._id || `api-${i}`, title: s.serviceName || s.title, description: s.description || '' })))
        } else {
          setError('Unexpected response')
        }
      } catch (err) {
        // Keep static fallback but record the error for debugging
        console.warn('Failed to load services from API, using fallback:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  // Handler to open modal and optionally fetch full service details for API ids
  const openDetails = async (id) => {
    setSelectedService(null)
    setModalOpen(true)
    setModalLoading(true)
    setModalError(null)

    // static fallback ids like static-0 are present in our static list
    if (id && id.startsWith('static-')) {
      const idx = parseInt(id.split('-')[1], 10)
      const svc = STATIC_SERVICES[idx] || null
      setSelectedService(svc)
      setModalLoading(false)
      return
    }

    // If we have the service in the current list, show it immediately and then try to fetch fresh details
    const found = services.find(s => s.id === id)
    if (found) setSelectedService(found)

    try {
      const res = await fetch(`/api/services/${id}`)
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      const json = await res.json()
      if (json && json.success && json.data) {
        setSelectedService({ title: json.data.serviceName || json.data.title, description: json.data.description || "", provider: json.data.providerId })
      } else {
        setModalError('Unexpected response')
      }
    } catch (err) {
      console.warn('Could not load service details:', err.message)
      // keep whatever we had
    } finally {
      setModalLoading(false)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedService(null)
    setModalError(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Health Information</h2>

        {/* {loading && <p className="mb-4">Loading services...</p>} */}
        {/* {error && <p className="mb-4 text-red-600">Unable to load latest services: {error}</p>} */}

        <div>
          {services.map((s, idx) => (
            <ServiceCard key={s.id ?? idx} id={s.id ?? `static-${idx}`} title={s.title} description={s.description} onOpen={openDetails} />
          ))}
        </div>

        {/* Modal for in-page details */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" onClick={closeModal}></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 z-10">
              <button className="absolute top-3 right-3 text-gray-600" onClick={closeModal}>✕</button>
              {modalLoading && <p>Loading...</p>}
              {modalError && <p className="text-red-600">{modalError}</p>}
              {!modalLoading && selectedService && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{selectedService.title}</h2>
                  <p className="text-gray-700 mb-4">{selectedService.description}</p>
                  {selectedService.provider && (
                    <p className="text-sm text-gray-600">Provided by: {selectedService.provider.providerName || selectedService.provider}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
