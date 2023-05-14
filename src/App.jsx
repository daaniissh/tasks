import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './hooks/useToggleHook'
function App() {
  const [toggle,toggleFunc] = useToggle()


  return (
    <>
        <h1>{toggle && "hello peeps🚀"}</h1>
        <button onClick={toggleFunc} >!?</button>
        {/* <audio src={audioFile} controls={false} autoPlay={isPlaying} /> */}
    </>
  )
}

export default App
