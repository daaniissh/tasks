import { useContext } from 'react'
import { CounterProvider } from '../context/CounterProvider'
import './App.css'
import ContextCounter from './component/ContextCounter'
function App() {

  return (
    <CounterProvider>
      <ContextCounter />
    </CounterProvider>

  )
}

export default App
