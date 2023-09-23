import logo from './logo.svg';
import './App.css';
import CInput from './CInput';
import { Component, useState } from 'react';
import Game from './Game'; 

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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0
    }
  }
  setSecond = () => {
    setInterval(() => {
      this.setState((prevState, props) => ({ second: prevState.second + 1 }));
    }, 1000);
  };

  render() {
    let { second } = this.state;
    return (
      <div className="App">
        {/* Props sample */}
        {/* <CInput label="Email" disabled={true} defaultValue="admin@gmail.com" />
      <CInput label="Số điện thoại" defaultValue="8739873298768"/>
      <CInput label="Chỗ ở hiện tại" defaultValue="Ha Noi"/>
      <CInput label="Địa chỉ thường chú" defaultValue="Ha Nam"/> */}

        {/* State sample */}
        {/* <h1>{second}</h1>
        <button onClick={() => this.setSecond()}>Start</button> */}

        {/* User define event */}
        <Game />
      </div >
    );
  }

}

export default App;
