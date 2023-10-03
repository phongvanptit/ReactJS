import { useContext } from "react";
import { RoleContext } from "./RoleContext";
function Table(props) {
    const role = useContext(RoleContext);
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
                            <button disabled={role !== "ADMIN"}>Delete</button>
                            <button disabled={role !== "ADMIN"}>Edit</button>
                        </td>
                    </tr>
                )
            }) : "Table empty"}

        </table >
    )
} export default Table;