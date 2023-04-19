import { Fragment, useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
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
    <Fragment>
      <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
    </Fragment>
  );
}

export default App;
