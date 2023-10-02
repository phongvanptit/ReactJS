import { Component } from "react";

class CInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.label !== state.label) {
            return { label: props.label };
        }
        return null;
    };
    
    render() {
        console.log("Rendering .......");
        return (<div>
            <label style={{ ...this.props.style }}>{this.state.label}</label>
            <input disabled={this.props.disabled} defaultValue={this.props.defaultValue} />
        </div>);
    }
} export default CInput;