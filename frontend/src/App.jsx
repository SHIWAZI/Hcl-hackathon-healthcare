import { useState } from 'react'
import {
  RouterProvider,
} from "react-router";
import './App.css'
import router from './routes';
import store from './store'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
