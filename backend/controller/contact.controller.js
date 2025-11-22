const CONTACT_INFO = {
  email: 'support@healthcare.example',
  phone: '+1 (555) 123-4567',
  address: '123 Wellness Ave, Healthy City',
}

export const getContact = (req, res) => {
  res.json({ success: true, data: CONTACT_INFO })
}

export default { getContact }
