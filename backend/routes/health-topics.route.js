import express from 'express'
import { getHealthTopics } from '../controller/healthTopics.controller.js'

const router = express.Router()

router.get('/', getHealthTopics)

export default router
