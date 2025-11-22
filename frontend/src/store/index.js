import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './sampleSlice'
import appointmentReducer from './appointmentSlice.js'

export default configureStore({
    reducer: {
        sample: sampleReducer,
        appointments: appointmentReducer,
    },
})