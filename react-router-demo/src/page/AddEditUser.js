import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const AddEditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", age: "" });
    useEffect(() => {
        // Call API get user by ID pass through URL
        axios.get(`https://651d509a44e393af2d59899d.mockapi.io/users/${id}`).then(response => {
            console.log(response);

            setUser(response.data);
        }).catch(err => {
            alert("Khong lay duoc thong tin user")
        })
    }, []);


    const handleEdit = () => {
        axios.put(`https://651d509a44e393af2d59899d.mockapi.io/users/${id}`, user).then(response => {
            navigate('/users')
        }).catch(err => {
            alert("Update  loi")
        })
    }

    return (
        <>
            <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Modal header */}
                <bold>{id ? "Edit user" : "Add new user"}</bold>
                <button onClick={() => navigate('/users')}>X</button>
            </div>
            <hr />

            <div style={{ height: "calc(100% - 100px)" }} >
                {/* Modal body */}
                <p>User Name:</p>
                <input name="user-name" placeholder="Enter user name" onChange={(event) => { setUser({ ...user, name: event.target.value }) }} defaultValue={user.name}></input>
                <p>User age:</p>
                <input name="user-age" placeholder="Enter user age" onChange={(event) => { setUser({ ...user, age: event.target.value }) }} defaultValue={user.age}></input>
            </div>
            <div style={{ position: "absolute", bottom: "0", height: "50px" }}>
                {/* Modal footer */}
                <button onClick={() => handleEdit()}>OK</button>
                <button onClick={() => navigate('/users')}>Cancel</button>
            </div >
        </>
    )
}; export default AddEditUser;