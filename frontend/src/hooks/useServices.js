import { useEffect, useState } from 'react'
import { fetchServices } from '../api/services'

export default function useServices() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      try {
        const data = await fetchServices()
        if (mounted) setServices(data.map((s, i) => ({ id: s._id || `api-${i}`, title: s.serviceName || s.title, description: s.description || '' })))
      } catch (err) {
        console.warn('useServices load failed:', err.message)
        if (mounted) setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => { mounted = false }
  }, [])

  return { services, loading, error }
}
