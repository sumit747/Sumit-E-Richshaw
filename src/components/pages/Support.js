import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Css/Support.css'
import { Link, useNavigate } from 'react-router-dom';
function Support() {
  const [userData,setUserData]= useState([]);
  const navigate = useNavigate();
  const LoadEdit=(id)=>{
    navigate("/useredit/"+id)
  }
  const LoadUpdate=(id)=>{
    navigate("/userUpdate/"+id)
  }
  const LoadDelete=(id)=>{
    if(window.confirm('Do you want to delete this user Data')){
      axios.delete('http://localhost:4000/user/'+id,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response)=>{
            alert('user delete Successfully')
            // navigate('/Support')
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message);
        })
    }
  }
  useEffect(() => {
    axios.get('http://localhost:4000/user')
        .then(response => {
          const userData = response.data;
          setUserData(userData);
          // console.log(userData);
        })
        .catch(error =>{
          console.log(error);
        });
  }, []);
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h1> Using the CRUD Oprations</h1>
        </div>
        <div className='card-body'>
          <div className='divbtn'>
            <Link to="/usercreate" className='btn btn-info'>Add New(+)</Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Action</td>
              </tr>
            </thead> 
            <tbody>
                  { userData && userData.map(user=>{
                    return(
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                          <a onClick={()=>{LoadEdit(user.id)}} className='btn btn-success'>Edit</a>
                          <a onClick={()=>{LoadUpdate(user.id)}} className='btn btn-primary'>Update</a>
                          <a onClick={()=>{LoadDelete(user.id)}} className='btn btn-danger'>Delete</a>
                        </td>
                      </tr>
                    );
                    })
                  }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Support;


// running scripts is disabled on this    
// system. -------- this wasthe problem