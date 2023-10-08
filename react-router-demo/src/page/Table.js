import { useContext } from "react";
import { RoleContext } from "./RoleContext";
import { useNavigate } from "react-router-dom";
function Table(props) {
    const role = useContext(RoleContext);
    const navigate = useNavigate()
    return (
        <table style={{ width: "100%" }}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>

            {props.data ? props.data.map(element => {
                return (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>
                            <button disabled={role !== "ADMIN"} onClick={() => props.deleteUser(element.id)}>Delete</button>
                            {/* <button disabled={role !== "ADMIN"} onClick={() => props.updateUser(element)}>Edit</button> */}
                            <button disabled={role !== "ADMIN"} onClick={() => navigate(`/edit-user/${element.id}`)}>Edit</button>
                        </td>
                    </tr>
                )
            }) : "Table empty"}

        </table >
    )
} export default Table;