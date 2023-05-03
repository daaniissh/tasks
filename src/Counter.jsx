import React, { useContext } from 'react'
import { ReducerContext } from './useReducer/context'

const Counter = () => {
  const {count,dispatch} = useContext(ReducerContext)
  console.log(count);
  return (
    <div>
      <h1>{count.count}</h1>
      <button onClick={()=>dispatch({type:'increment'} )} >+</button>
      <button onClick={()=>dispatch({type:'decrement'})} >-</button>
    </div>
  )
}

export default Counter