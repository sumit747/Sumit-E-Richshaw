import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserUpdate = () => {
    const { name} = useParams();
    const [userUpdate, setUserUpdate] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/user/'+ name)
            .then(response => {
                const userUpdate = response.data;
                setUserUpdate(userUpdate);
                // console.log(userData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div className="card">
            <div className="card-title">
                <h2>User Update </h2>
            </div>
            <div className="card-body"></div>
            {userUpdate &&
                <div>

                    <h2>The User Name is : <b>{userUpdate.name}</b>  ({userUpdate.id}) </h2>
                    <h2> Contact Details</h2>
                    <h3>Email is : {userUpdate.email}</h3>
                    <h3>Mobile is : {userUpdate.mobile}</h3>
                    <Link className="btn btn-danger" to="/Support">Back to list</Link>
                </div>
            }
        </div>
    );
}
export default UserUpdate;