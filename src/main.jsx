import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from "./routing.jsx"
import './index.css'

import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/index.js'
import Loader from './components/Loader/Loader.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loader/>} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>       
  </Provider> 
)
