import React, { Fragment, useState } from "react";
import { Title } from "./components/Title";
import Form from "./components/Form";
import UseEffect from "./components/UseEffect";
import './App.css'
const Slider = () => {
const [tab,setTab] = useState('form')

  return (
    <Fragment>
      <button className="form-btn" onClick={()=>setTab("form")} >Form</button>
      <button className="use-btn" onClick={()=>setTab("useEFfect")} >useEffect</button>
      {tab === "form" ? <Form/>:<UseEffect/> }
    </Fragment>
  );
};

export default Slider;
