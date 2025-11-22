import { useState } from 'react'
import {
  RouterProvider,
} from "react-router";
import './App.css'
import router from './routes';
import store from './store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />

      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
