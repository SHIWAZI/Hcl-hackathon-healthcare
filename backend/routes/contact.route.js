import express from 'express'
import { getContact } from '../controller/contact.controller.js'

const router = express.Router()

router.get('/', getContact)

export default router
