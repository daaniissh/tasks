import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReducerProvider } from './useReducer/ReducerProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReducerProvider>
      <App />
    </ReducerProvider>
  </React.StrictMode>,
)
