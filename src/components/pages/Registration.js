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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(formData);
  //   setformData({
  //     name: "",
  //     email: "",
  //     Address: "",
  //     model: "",
  //     mobile: "",
  //   })
  // }
  const heandleButtonClick = (event)=>{
    event.preventDefault();
    console.log(formData);
    setformData({
      name: "",
      email: "",
      Address: "",
      model: "",
      mobile: "",
    })
    alert="jd"
    const emailSubject = `Dear ${formData.name}`;
    const emailBody = 'This mail Recieved By Sumit E-Richshaws';
    const mailtoLink = `mailto:${formData.email}?subject=${emailSubject}& body=${emailBody}`;
    window.location.href =mailtoLink;
    // console.log(mailtoLink);
  }
  return (
    <div className="col-md-12">
      <div className="card shadow">
        <div className="card-body"></div>
        <form className="Form" >
        // onSubmit={handleSubmit}
          <div className='Farm1' >
            <p className='Page'><h1><strong>Details of Enquiry User </strong></h1></p>
            <label className='imputMain'>
              Name :-
              <input className='input' type='text' name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label className='imputMain'>
              Email :-
              <input className='input' type='text' name='email' placeholder='abc@gmail.com' value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label className='imputMain'>
              Date :-
              <DatePicker
                className='input'
                selected={seletedDate}
                onChange={handleDateChange}
                dateFormat="P"
                placeholderText='Seleted Current Date'
              />
            </label>
            <br />
            <label className='imputMain1'>
              Mobile Number :-
              <input className='input1' type='text' name='mobile' placeholder='Enter your Mobile No.' value={formData.mobile} onChange={handleChange} />
            </label>
            <br />
            <label className='imputMain2'>
              Seleted Modal :-
              <select className='input2' >
                <option>Choose Modal </option>
                <option>E-Richshow 01</option>
                <option>E-Richshow 02</option>
                <option>E-Richshow 03</option>
                <option>E-Richshow 04</option>
                <option>E-Richshow 05</option>
              </select>
            </label>
            <br />
            <label className='imputMain3' >
              Address :-
              <textarea className='input' rows={2} cols={23} placeholder='Write your Address'></textarea>
            </label>
            <br />
            <br />
            <button type="Submit" className='button' onClick={heandleButtonClick}>Send</button>
            {/* <button type="New User">New User</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}
export default Registration;


