import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./page/Home"
import UserManagement from './page/UserManagement';
import About from './page/About';
import { useState } from 'react';
import { LanguageContext } from './page/LanguageContext';
function App() {
  const [language, changeLanguage] = useState("vi");
  return (
    <LanguageContext.Provider value={language}>
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
        <button onClick={() => changeLanguage(language === "vi" ? "en" : "vi")}>{language}</button>
      </div >
    </LanguageContext.Provider>
  );
}

export default App;
