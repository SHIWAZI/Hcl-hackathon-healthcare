import React, { useEffect, useState } from 'react'

import Header from '../components/Header'

export default function HealthTopics() {
  const [topics, setTopics] = useState([
    { title: 'Nutrition', excerpt: 'Advice on balanced diets and healthy eating.' },
    { title: 'Exercise', excerpt: 'Workouts and tips for staying active.' },
    { title: 'Mental Health', excerpt: 'Resources and support for mental wellbeing.' },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/health-topics')
        if (!res.ok) throw new Error(`Server responded ${res.status}`)
        const json = await res.json()
        if (json && json.success && Array.isArray(json.data)) {
          setTopics(json.data.map(t => ({ title: t.title || t.name, excerpt: t.excerpt || t.summary || '' })))
        } else {
          setError('Unexpected response')
        }
      } catch (err) {
        console.warn('Failed to load health topics from API, using fallback:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTopics()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Health Topics</h1>

        {loading && <p className="mb-4">Loading topics...</p>}
        {/* {error && <p className="mb-4 text-red-600">Unable to load topics: {error}</p>} */}

        <div className="space-y-4">
          {topics.map((t, i) => (
            <div key={i} className="bg-white rounded p-4 shadow">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-gray-700">{t.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
