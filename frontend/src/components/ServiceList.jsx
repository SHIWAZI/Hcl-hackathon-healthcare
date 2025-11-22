import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceList({ services = [], onOpen, loading, error }) {
  if (loading) return <p className="mb-4">Loading services...</p>
  if (error) return <p className="mb-4 text-red-600">Unable to load latest services: {error}</p>

  return (
    <div>
      {services.map((s, idx) => (
        <ServiceCard key={s.id ?? idx} id={s.id ?? `static-${idx}`} title={s.title} description={s.description} onOpen={onOpen} />
      ))}
    </div>
  )
}
