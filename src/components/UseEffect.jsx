import React, { useState } from 'react'
import { Title } from './Title'

const UseEffect = () => {
  const [open,setOpen] = useState(false)

  return (
    <div>
            <h4>{open ? "Mounted":"UnMounted"}</h4>
     { open && <  Title open={open}/>}
     <button onClick={()=>setOpen(!open)} >{open ? "Hide Comp" : "Show Comp"}</button>
    </div>
  )
}

export default UseEffect