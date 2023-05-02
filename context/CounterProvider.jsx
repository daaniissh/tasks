import React, { useState } from 'react'
import { CounterContext } from './Context'

export  const CounterProvider = ({children}) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prev)=>{
      if(count >= 10) return prev;
      return prev + 1

    })
  }
  const onDecrement = () => {
    setCount((prev) =>{
      if(prev <= 0) return prev;
      return prev - 1
    });
  };
  return (
   <CounterContext.Provider value={{count,onDecrement,onIncrement}}>
    {children}
   </CounterContext.Provider>
  )
}
