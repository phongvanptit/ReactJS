import { Component } from "react";
import Modal from 'react-modal';
import Table from "./Table";
const customStyles = {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px'

};
const data = [
    {
        "id": "1",
        "name": "Phong1",
        "age": 18
    },
    {
        "id": "2",
        "name": "Phong2",
        "age": 18
    },
    {
        "id": "3",
        "name": "Phong3",
        "age": 18
    },
    {
        "id": "4",
        "name": "Phong4",
        "age": 18
    }
]
class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render() {
        return <div>
            <button onClick={() => {
                this.setState({ isOpen: true });
            }}>Add</button>
            <Table data={data} />


            <Modal
                isOpen={this.state.isOpen}
                contentLabel="Modal sample"
                onAfterOpen={() => { }}
                onRequestClose={() => { }}
                style={{ padding: "0px" }}
            >
                <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                    <bold>Add new user</bold>
                    <button onClick={() => this.setState({ isOpen: false })}>X</button>
                </div>
                <hr />
                <div style={{ background: "green", height: "calc(100% - 100px)" }}></div>
                <div style={{ position: "absolute", bottom: "0", height: "50px" }}>
                    <button>OK</button>
                    <button>Cancel</button>
                </div>

                {/* Content of modal below */}
            </Modal>
        </div >
    }
} export default UserManagement;