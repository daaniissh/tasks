import { useReducer } from "react";
import { ReducerContext } from "./context"
const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        if (state.count >= 10) return state;
        return {count:state.count + 1}
      case 'decrement':
        if (state.count === 0) return state;
        return {count:state.count - 1}
      default:
       return state
    }
  }
export const ReducerProvider = ({ children }) => {
  
  const [count, dispatch] = useReducer(reducer, {
    count:0
  })
  return (
    <ReducerContext.Provider value={{ count, dispatch }} >
      {children}
    </ReducerContext.Provider>
  )
}
