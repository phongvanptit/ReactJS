import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        }
    }
    componentDidMount() {
        setInterval(() => {
            // this.setState((state, props) => {
            //     if (this.state.second === 59) {
            //         if (state.minute === 59) {
            //             if (state.hour === 23) {
            //                 return ({ second: 0, minute: 0, hour: 0 });
            //             }
            //             return ({ second: 0, minute: 0, hour: this.state.hour + 1 });
            //         }
            //         return ({ second: 0, minute: this.state.minute + 1 });
            //     }
            //     if (this.state.second === state.second)
            //         return ({ second: this.state.second + 1 });
            // });
            this.setState({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            })
        }, 1000);
    }

    formatNumber = num => {
        return num.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })
    }
    render() {
        return (<div style={{ fontWeight: "bold", fontSize: "30px", ...this.props.style }}>
            <label>{this.formatNumber(this.state.hour)}</label> &#xb7;
            <label style={{ paddingLeft: "10px" }}>{this.formatNumber(this.state.minute)}</label> &#xb7;
            <label style={{ paddingLeft: "10px" }}>{this.formatNumber(this.state.second)}</label>
        </div>)
    }
} export default Clock;