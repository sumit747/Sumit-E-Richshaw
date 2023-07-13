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
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.mobile]: event.target.value,
      [event.target.Address]: event.target.value
    });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   setformData({
  //     name: "",
  //     email: "",
  //     Address: "",
  //     model: "",
  //     mobile: "",
  //   })
  // }
  const heandleButtonClick = (event) => {
    event.preventDefault();
    console.log(formData);
    
    setformData({
      name: "",
      email: "",
      Address: "",
      model: "",
      mobile: "",
    })
    alert(`You are Conform ${formData.name} to send mail`)
    const emailSubject = `Information`;
    const emailBody = `Dear ${formData.name}, 
     "this Mail provide by Sumit E-rishshaws",
     Thank Reguard ,
     Sumit Chaudhary,
     CEO of E-Richshows Companey
     Mo.9183834748`;
    const mailtoLink = `mailto:${formData.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
    // console.log(mailtoLink);
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className="offset lg-3 col-lg-6">
          <form className="constainer">
            <div className="card">
              <div className='card-title'>
                <p className='Page'><h1><strong>Details of Enquiry User </strong></h1></p>
                {/* onSubmit={handleSubmit}  */}
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain'>Name</label>
                      <input className='form-control' name='name' placeholder='Enter Your Name' required value={formData.name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain'>Email</label>
                      <input className='form-control' name='email' placeholder='abc@gmail.com' required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain'>Date</label> <br />
                      <DatePicker
                        className='form-control'
                        selected={seletedDate}
                        onChange={handleDateChange}
                        dateFormat="P"
                        required
                        placeholderText='Seleted Current Date'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain'> Mobile Number </label>
                      <input className='form-control' name='mobile' placeholder='Enter your Mobile No.' required value={formData.mobile} onChange={handleChange} />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain'> Seleted Modal </label>
                      <select className='form-control' >
                        <option>Choose Modal </option>
                        <option>E-Richshow 01</option>
                        <option>E-Richshow 02</option>
                        <option>E-Richshow 03</option>
                        <option>E-Richshow 04</option>
                        <option>E-Richshow 05</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='imputMain' >Address </label>
                      <textarea className='form-control' rows={2} cols={23} required ></textarea>
                    </div>
                  </div>
                  <div className='col-lg-12 justify-content-center'>
                    <div className='form-group'>
                      <button className='btn btn-success' onClick={heandleButtonClick}>Send</button>
                      {/* <button type="New User">New User</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Registration;


