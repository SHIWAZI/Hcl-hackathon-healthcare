import { configureStore } from '@reduxjs/toolkit'
import sampleReducer from './sampleSlice'

export default configureStore({
    reducer: {
        sample: sampleReducer,
    },
})