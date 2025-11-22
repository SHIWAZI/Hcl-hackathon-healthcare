export async function fetchServices() {
  const res = await fetch('/api/services')
  if (!res.ok) throw new Error(`Server responded ${res.status}`)
  const json = await res.json()
  if (!json || !json.success) throw new Error('Unexpected response')
  return json.data
}

export async function fetchServiceById(id) {
  const res = await fetch(`/api/services/${id}`)
  if (!res.ok) throw new Error(`Server responded ${res.status}`)
  const json = await res.json()
  if (!json || !json.success) throw new Error('Unexpected response')
  return json.data
}
