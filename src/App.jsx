import { useState } from "react";
import Counter from "./components/Counter";

function App() {
   const [count, setCount] = useState(0);

   const onIncrement = () => {
      if (count >= 0 && count < 10) {
         setCount(prev=>prev+1);
      }
   };
   const onDecrement = () => {
      if (count > 0) {
         setCount(prev=>prev-1);
      }
   };
   return (
      <div className="App">
         <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
   );
}

export default App;
