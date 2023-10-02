import { Component } from "react";

const withStyle = (WrapComponent) => {
    // class AB extends Component {
    //     render() {
    //         return (
    //             <WrapComponent style={{ color: "red", ...this.props.style }} {...this.props}/>);
    //     }
    // };
    function NewComponent(props) {
        return <WrapComponent style={{ color: "red", ...props.style }} {...props} />;
    }
    return NewComponent;
}; export default withStyle;