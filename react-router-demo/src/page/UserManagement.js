import { Component } from "react";
import Modal from 'react-modal';
import Table from "./Table";
import axios from 'axios'
const customStyles = {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px'

};
// const data = [
// {
//     "id": "1",
//     "name": "Phong1",
//     "age": 18
// },
// {
//     "id": "2",
//     "name": "Phong2",
//     "age": 18
// },
// {
//     "id": "3",
//     "name": "Phong3",
//     "age": 18
// },
// {
//     "id": "4",
//     "name": "Phong4",
//     "age": 18
// }
// ]
class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: [],
            user: undefined
        }
    }

    componentDidMount() {
        this.getListUser();
    }

    getListUser = () => {
        // fetch(`https://651d509a44e393af2d59899d.mockapi.io/users`).then((response) => response.json())
        //     .then(users => this.setState({ data: [...users] }));

        // Using axios
        axios.get("https://651d509a44e393af2d59899d.mockapi.io/users").then(respone => {
            this.setState({ data: [...respone.data], user: undefined, isOpenConfirm: false, isOpen: false });
        }).catch(err => { console.log(err); alert("Không lấy được dữ liệu") });
    }
    onDelete = () => {
        // fetch(`https://651d509a44e393af2d59899d.mockapi.io/users/${id}`, { method: "DELETE" }).then((response) => {
        //     this.getListUser();
        // });
        const controller = new AbortController();
        axios.delete(`https://651d509a44e393af2d59899d.mockapi.io/users/${this.state.id}`, {

            // signal: controller.signal
        }).then(respone => {
            this.getListUser();
        }).catch(err => {
            console.log(err);
            alert("Không xóa được dữ liệu");
        });
    }

    onUpdate = user => {
        // fetch(`https://651d509a44e393af2d59899d.mockapi.io/users/${id}`, { method: "PUT", body: JSON.stringify({ id: id, name: "Hello world", age: 10 }), headers: { "Content-Type": "application/json" } }).then((response) => {
        //     this.getListUser();
        // });
        axios.put(`https://651d509a44e393af2d59899d.mockapi.io/users/${user.id}`, user).then(respone => {
            this.getListUser();

        }).catch(err => {
            console.log(err);

            alert("Không sửa được dữ liệu");
        });

    }

    addNewData = () => {
        // fetch(`https://651d509a44e393af2d59899d.mockapi.io/users`, { method: "POST", body: JSON.stringify({ id: 100, name: "Hello world XXXXX", age: 1000 }), headers: { "Content-Type": "application/json" } }).then((response) => {
        //     this.getListUser();
        // });

        axios.post(`https://651d509a44e393af2d59899d.mockapi.io/users`, this.state.user).then(respone => {
            this.getListUser();
            this.setState({ isOpen: false })
        }).catch(err => { console.log(err); alert("Không thêm được dữ liệu") });
    }

    handleAddUser = () => {
        this.setState({ isOpen: true });
    }

    handleInputChanged = event => {
        const { user } = this.state;
        switch (event.target.name) {
            case "user-name":
                this.setState({ user: { id: user && user.id, age: user && user.age, name: event.target.value } });
                console.log("User name = " + event.target.value);
                break;
            case "user-age":
                this.setState({ user: { id: user && user.id, age: event.target.value, name: user && user.name } });
                console.log("User age = " + event.target.value);
                break;
            default:
                break;
        }
    }

    handleUpdate = user => {
        this.setState({ isOpen: true, user: user })
    }

    handleDelete = id => {
        this.setState({ isOpenConfirm: true, id: id })
    }

    render() {
        const { user, isOpenConfirm, id } = this.state;
        return <div>
            <button onClick={() => this.handleAddUser()}>Add</button>
            <Table data={this.state.data} deleteUser={id => this.handleDelete(id)} updateUser={(user) => this.handleUpdate(user)} />


            <Modal
                isOpen={this.state.isOpen}
                contentLabel="Modal sample"
                onAfterOpen={() => { }}
                onRequestClose={() => { }}
                style={{ padding: "0px" }}
            >

                <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Modal header */}
                    <bold>{user && user.id ? "Edit user" : "Add new user"}</bold>
                    <button onClick={() => this.setState({ isOpen: false, user: undefined })}>X</button>
                </div>
                <hr />

                <div style={{ height: "calc(100% - 100px)" }} >
                    {/* Modal body */}
                    <p>User Name:</p>
                    <input name="user-name" placeholder="Enter user name" onChange={(event) => this.handleInputChanged(event)} defaultValue={user && user.id && user.name}></input>
                    <p>User age:</p>
                    <input name="user-age" placeholder="Enter user age" onChange={(event) => this.handleInputChanged(event)} defaultValue={user && user.id && user.age}></input>
                </div>
                <div style={{ position: "absolute", bottom: "0", height: "50px" }}>
                    {/* Modal footer */}
                    <button onClick={user === undefined || !user.id ? () => this.addNewData() : () => this.onUpdate(user)}>OK</button>
                    <button onClick={() => this.setState({ isOpen: false, user: undefined })}>Cancel</button>
                </div>

                {/* Content of modal below */}
            </Modal >


            <Modal
                isOpen={isOpenConfirm}
                onAfterOpen={() => { }}
                onRequestClose={() => { }}
                style={{ padding: "0px" }}>
                <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Modal header */}
                    <bold>Xóa User</bold>
                    <button onClick={() => this.setState({ isOpen: false, user: undefined })}>X</button>
                </div>
                <hr />

                <div style={{ height: "calc(100% - 100px)" }} >
                    Bạn có chắc xóa user này không?
                </div>
                <div style={{ position: "absolute", bottom: "0", height: "50px" }}>
                    {/* Modal footer */}
                    <button onClick={() => this.onDelete()}>OK</button>
                    <button onClick={() => this.setState({ isOpenConfirm: false })}>Cancel</button>
                </div>
            </Modal>
        </div >
    }
} export default UserManagement;