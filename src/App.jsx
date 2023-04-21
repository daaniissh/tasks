import { Fragment, useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";
import FaqComp from "./components/FaqComp";
import axios from "axios";


function App() {
  const [view, setView] = useState("basic");
  const [user,setUser] = useState([])
  useEffect(() => {
    (async()=>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUser(res?.data)
    })()
  }, [])
 
  return (
    <div className={view === "advanced" ? "bg-black h-screen w-full text-white":"bg-[#eee] h-screen w-full text-black"}>
      <nav className="flex p-10 text-center justify-center">
        <h3 className="hover:border-purple-900 text-white cursor-pointer mr-10 border border-spacing-0 border-cyan-700 py-2 px-3 rounded-lg"
          onClick={() => setView("basic")}
          style={{ background: view === "basic" ? "#234" : "" }}
        >
          Faq Comp
        </h3>
        <h3
        className="hover:border-purple-900 cursor-pointer   border border-spacing-0 border-cyan-700 py-2 px-3 rounded-lg"
          onClick={() => setView("advanced")}
          style={{ background: view === "advanced" ? "#234" : "" }}
        >
          UserList
        </h3>
      </nav>
      {view === "basic" ?   <FaqComp />:<UserList user={user} />}
    </div>
  );
}

export default App;
