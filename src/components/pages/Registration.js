import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import '../Css/Registration.css';

const Registration = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    Address: '',
    model: '',
    mobile: '',
  })
  const [seletedDate, setSeletedDate] = useState(null);
  const handleDateChange = (date) => {
    setSeletedDate(date);
  };
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
      name: "",
      email: "",
      Address: "",
      model: "",
      mobile: "",
    })
  }
  return (
    <div className="col-md-12">
      <div className="card shadow">
        <div className="card-body"></div>
        <form className="Form" onSubmit={handleSubmit}>
          <div className='Farm1' >
            <p className='Page'><h1><strong>Details of Enquiry User </strong></h1></p>
            <label className='hello1'>
              Name:
              <input className='hello' type='text' name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} />
            </label>
            <label className='hello1'>
              Email:
              <input className='hello' type='text' name='email' placeholder='abc@gmail.com' value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label className='hello1'>
              Seleted Modal:
              <select className='hello' >
                <option>Choose Modal </option>
                <option>E-Richshow 01</option>
                <option>E-Richshow 02</option>
                <option>E-Richshow 03</option>
                <option>E-Richshow 04</option>
                <option>E-Richshow 05</option>
              </select>
            </label>
            <label className='hello1' >
              Address:
              <textarea className='hello' rows={3} cols={24} placeholder='Write your Address'></textarea>
            </label>
            <br />
            <br />
            <label className='hello1'>
              Date:
              <br/>
              <DatePicker
                className='hello'
                selected={seletedDate}
                onChange={handleDateChange}
                dateFormat="dd/mm/yyyy"
                placeholderText='Seleted Current Date'
              />
            </label>
            <label className='hello1'>
              Mobile Number:
              <input className='hello' type='text' name='mobile' placeholder='Enter your Mobile No.' value={formData.mobile} onChange={handleChange} />
            </label>
            <br />
            <br />
            <button type="Submit" className='button'>Send</button>
            {/* <button type="New User">New User</button> */}
          </div>
        </form>
        </div>
        </div>
        )
}
        export default Registration;


