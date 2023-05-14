import { useState } from "react";
import audioFile from '../assets/click.wav'

export const useToggle = () => {
  const [toggle,setToggle] = useState(false)
  const [audio] = useState(new Audio(audioFile))

  const toggleFunc=()=>{
    setToggle(!toggle)
    toggle ? audio.pause() : audio.play()
   
  }
  return [toggle,toggleFunc]
}