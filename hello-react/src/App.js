import logo from './logo.svg';
import './App.css';
import CInput from './CInput';
import { Component, PureComponent, useState } from 'react';
import Game from './Game';
import Clock from './Clock';
import withStyle from './withStyle';
// function App() {
//   const users = ["phong", "Minh", "nam"];
//   let [seconds, setSecond] = useState(0);
//   return (

//     <div className="App">
//       {/* <CInput label="Email" disabled={true} defaultValue="admin@gmail.com" />
//       <CInput label="Số điện thoại" defaultValue="8739873298768"/>
//       <CInput label="Chỗ ở hiện tại" defaultValue="Ha Noi"/>
//       <CInput label="Địa chỉ thường chú" defaultValue="Ha Nam"/> */}
//       <h1>{seconds}</h1>
//       <button onClick={() => setInterval(() => {
//         setSecond(seconds++);
//       }, 1000)}>Start</button>

//     </div >
//   );
// }


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      second: 0
    }
  }
  componentDidMount() {
    console.log("App did mount")
  }
  setSecond = () => {
    setInterval(() => {
      this.setState((prevState, props) => ({ second: this.state.second + 1 }));
    }, 1000);
  };

  render() {
    let { second } = this.state;
    const NewCInput = withStyle(CInput);
    const ClockNew = withStyle(Clock);
    return (
      <div className="App">
        {/* Props sample */}
        {/* <CInput label="Email" disabled={true} defaultValue="admin@gmail.com" style={{ fontWeight: "bold" }} />
        <CInput label="Số điện thoại" defaultValue="8739873298768" />
        <CInput label="Chỗ ở hiện tại" defaultValue="Ha Noi" />
        <CInput label="Địa chỉ thường chú" defaultValue="Ha Nam" /> */}

        {/* State sample */}
        {/* <h1>{second}</h1>
        <button onClick={() => this.setSecond()}>Start</button> */}

        {/* User define event */}
        {/* <Game /> */}
        <ClockNew />
        <NewCInput label="HOC" style={{ color: "blue" }} />
        <CInput label="Chỗ ở hiện tại" defaultValue="Ha Noi" />
      </div >
    );
  }

}

export default App;
