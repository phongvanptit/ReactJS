import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./page/Home"
import UserManagement from './page/UserManagement';
import About from './page/About';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users" style={{ paddingLeft: "10px", paddingRight: "10px" }}>Users</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
