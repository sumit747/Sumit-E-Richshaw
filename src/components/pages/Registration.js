import React, { useState } from 'react'
import '../Css/Registration.css';

const Registration = () => {
  const [formData, setformData] = useState({
    email: '',
    password: "",
  })
  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setformData({
      email: "",
      password: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className='Page'>Login User</p>
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={formData.emailmail}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Password:
        <input
          type='text'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button type="Submit">Submit</button>
      <button type="New User">New User</button>
    </form>
  )
}
export default Registration;


