import React, { useState } from 'react'
import './Form.css'
const Form = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    country: "select",
    birth: "",
    skills: []
  });
  const [error, setError] = useState({
    firstName: false,
    email: false,
    gender: false,
    country: false,
    birth: false,
    skills: false
  });

  const handleChange = (event) => {
    const { name } = event.target
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    if (name === 'sk') {
      handleCheckbox(event)
    }
    if(name === 'gender'){
      handleGender(event)
    }
  };
  const handleGender=(event)=>{
    if(event.target.checked){
      setError(prev => ({
        ...prev,
        gender: false
      }))
    }else(
      setError(prev => ({
        ...prev,
        gender: true
      }))
    )
  }
  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];
    const { name } = event.target
    if (name === 'sk' && event.target.checked) {
      newSkills.push(event.target.value);
      setError(prev => ({
        ...prev,
        skills: false
      }))
    } else {
      setError(prev => ({
        ...prev,
        skills: true
      }))
      newSkills = newSkills.filter((skill) => skill !== event.target.value);

    }

    setFields((prev) => ({
      ...prev,
      skills: newSkills,
    }));
    //  isFormValidOnBlur(event);
  };
  //*
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    let male = event.target[3].checked
    let female = event.target[4].checked

    male === false && female === false ? setError((prev) => ({
      ...prev,
      gender: true
    })) : setError((prev) => ({
      ...prev,
      gender: false
    }))
    let errors = {
      firstName: false,
      email: false,
      gender: false,
      country: false,
      birth: false,
      skills: false
    }
    if (fields.firstName === "") {
      errors.firstName = true
    }
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.country == "select") {
      errors.country = true
    }
    if (fields.birth === "") {
      errors.birth = true;
    }
    if (fields.skills.length === 0) {
      errors.skills = true
    }
    setError(errors)
    if (Object.values(errors).some((error) => error === true)) {
      return false
    }

    return true



  };
  const errorHandler = (e) => {
    let value = e.target.value

    const { name } = e.target;
    value.length === 0 ? setError((prev) => ({
      ...prev,
      [e.target.name]: true
    })) : setError((prev) => ({
      ...prev,
      [e.target.name]: false
    }))
    if (name === 'email' && !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      value
    )) {
      setError((prev) => ({
        ...prev,
        email: true
      }))
    }

  }
  const selectHandle = (e) => {
    let val = e.target.value

    if (val == "select") {
      setError((prev) => ({
        ...prev,
        country: true
      }))
    } else {
      setError((prev) => ({
        ...prev,
        country: false
      }))
    }
  }


  return (
    <div>
      <form id='msform' onSubmit={handleSubmit} action="">
        <fieldset>
          <h2 className="fs-title">Create your account</h2>
          {error.firstName && <span className='error-span' >The username field is required*</span>}
          <input className={error.firstName === true ? "red-border" : ""} onBlur={errorHandler} onChange={handleChange} type="text" name="firstName" placeholder="firstName" />
          {error.email && <span className='error-span' >The email address you entered is invalid*</span>}
          <input onBlur={errorHandler} onChange={handleChange} className={error.email === true ? "red-border" : ""} type="text" name="email" placeholder="Email" />
          <label htmlFor="" className='bold'>Gender</label>
          <br />
          {error.gender && <span className='error-span' >Select Your gender*</span>}

          <div className="gender">

            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}

              value="female"
              id="female"

            />
            <label htmlFor="female">Female</label>
            <br />


          </div>
          <div className="check-parent">
            <label htmlFor="" className='bold'>Skills</label>
            {error.skills && <span className='error-span' >Select Your skills*</span>}
            <div className="checkbox-div">
              <input onChange={handleChange} type="checkbox" name="sk" id="" />
              <span>Html</span>
              <input onChange={handleChange} type="checkbox" name="sk" id="" />
              <span>JavaScript</span>
              <input onChange={handleChange} type="checkbox" name="sk" id="" />
              <span>Css3</span>
              <input onChange={handleChange} type="checkbox" name="sk" id="" />
              <span>php</span>
            </div>
          </div>
          <div className="">
            <label htmlFor="" className='bold' >Date of birth</label>
            {error.birth && <span className='error-span' >Please enter a valid date*</span>}
            <input onChange={handleChange} className={error.birth === true ? "red-border birth" : "birth"} onBlur={errorHandler} type="date" name='birth' />
          </div>

          <div className="">
            <label htmlFor="" className='bold' >Location</label>
            <br />
            {error.country && <span className='error-span' >Please select a country from the list*</span>}

            <select className={error.country === true ? "red-border location" : "location"} onBlur={selectHandle} onChange={handleChange} name="country" id="">
              <option value="select">Select</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="china">China</option>
              <option value="dubai">Dubai</option>
              <option value="uk">UK</option>
              <option value="other">Other Country</option>
            </select>
          </div>
          <button 
            type="submit"
            name="next"
            className="next action-button"
            defaultValue="Next"
          >Submit</button>

        </fieldset>
      </form>
    </div>
  )
}

export default Form