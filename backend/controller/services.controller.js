import mongoose from 'mongoose'
import Service from '../model/service.model.js'

// Development fallback static services (used when DB is unavailable)
const STATIC_SERVICES = [
  { _id: 's1', serviceName: 'COVID-19 Updates', description: 'Stay informed about the latest COVID-19 guidelines and vaccination information.', providerId: null },
  { _id: 's2', serviceName: 'Seasonal Flu Prevention', description: 'Learn about steps you can take to prevent the seasonal flu and when to get vaccinated.', providerId: null },
  { _id: 's3', serviceName: 'Mental Health Awareness', description: 'Explore resources and support options for maintaining good mental health.', providerId: null },
]

export const getServices = async (req, res) => {
  try {
    const { providerId } = req.query
    const filter = {}
    if (providerId && mongoose.Types.ObjectId.isValid(providerId)) filter.providerId = providerId

    const services = await Service.find(filter).populate('providerId')
    res.json({ success: true, data: services })
  } catch (err) {
    console.error('Error fetching services from DB:', err.message)
    if (process.env.NODE_ENV === 'development') {
      console.warn('Falling back to static services (development mode)')
      return res.json({ success: true, data: STATIC_SERVICES })
    }
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export const getServiceById = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id) && !id.startsWith('s')) {
    return res.status(400).json({ success: false, message: 'Invalid service id' })
  }

  try {
    const service = await Service.findById(id).populate('providerId')
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' })
    res.json({ success: true, data: service })
  } catch (err) {
    console.error('Error fetching service by id from DB:', err.message)
    if (process.env.NODE_ENV === 'development') {
      console.warn('Falling back to static service by id (development mode)')
      const svc = STATIC_SERVICES.find(s => s._id === id) || null
      if (!svc) return res.status(404).json({ success: false, message: 'Service not found' })
      return res.json({ success: true, data: svc })
    }
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

export default { getServices, getServiceById }
