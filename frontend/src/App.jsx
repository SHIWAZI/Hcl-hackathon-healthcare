import { useState } from 'react'
import {
  RouterProvider,
} from "react-router";
import './App.css'
import router from './routes';
import Services from './routes/Services';

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
