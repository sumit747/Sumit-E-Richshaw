import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserEdit =()=>{
    const { empid } = useParams();
    // const [userEdit, setUserEdit] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/user/' + empid)
            .then(response => {
                // const userEdit = response.data;
                idChange(response.data.id);
                nameChange(response.data.name);
                emailChange(response.data.email);
                mobileChange(response.data.mobile);
                activeChange(response.data.active);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const [id,idChange] = useState(" ");
    const [name,nameChange] = useState(" ");
    const [email,emailChange] = useState(" ");
    const [mobile,mobileChange] = useState(" ");
    const [active,activeChange] = useState(true);
    const [validate,valChange] = useState(false);
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault();
        const newUser={id,name,email,mobile,active};
        
        axios.put('http://localhost:4000/user/'+empid,newUser,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response)=>{
            alert('New User Saved Successfully')
            navigate('/Support')
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="constainer" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2>Edit user</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Id</label>
                                            <input  value={id} disabled="disabled" className=" form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input  value={name} onMouseDown={(e)=>valChange(true)} required onChange={(e)=>nameChange(e.target.value)} className="form-control" />
                                            { name.length===0 && validate && <span className="text-danger">Please Enter Name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Email</label>
                                            <input value={email} onChange={(e)=>emailChange(e.target.value)} className=" form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label> Mobile</label>
                                            <input value={mobile} onChange={(e)=>mobileChange(e.target.value)} className=" form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={(e)=>activeChange(e.target.checked)} type="checkbox" className=" form-check-input" />
                                            <label className="form-check-label"> is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link  to="/Support" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
}
export default UserEdit;