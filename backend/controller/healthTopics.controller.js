const STATIC_TOPICS = [
  { id: 't1', title: 'Nutrition', excerpt: 'Advice on balanced diets and healthy eating.' },
  { id: 't2', title: 'Exercise', excerpt: 'Workouts and tips for staying active.' },
  { id: 't3', title: 'Mental Health', excerpt: 'Resources and support for mental wellbeing.' },
]

export const getHealthTopics = (req, res) => {
  res.json({ success: true, data: STATIC_TOPICS })
}

export default { getHealthTopics }
