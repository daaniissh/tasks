import React, { useContext } from 'react'
import { CounterContext } from '../context/Context'

const ContextCounter = () => {
  const { count,onDecrement,onIncrement } = useContext(CounterContext)
  return (
    <div>
      <h1 className="text-center" >{count}</h1>
      <button onClick={onIncrement} className='mr-10' >+</button>
      <button onClick={onDecrement} >-</button>
    </div>
  )
}

export default ContextCounter