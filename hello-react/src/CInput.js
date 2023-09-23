import { Component } from "react";

class CInput extends Component {
    render() {
        console.log(this.props);
        return (<div>
            <label>{this.props.label}</label>
            <input disabled={this.props.disabled} defaultValue={this.props.defaultValue} />
        </div>);
    }
} export default CInput;