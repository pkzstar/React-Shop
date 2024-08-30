import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoPage from './logoPage';
import Test from './Test';
import Landing from './pages/landing';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
          <Link to="/logo">Logo</Link>
          <Link to="/home">Home</Link>
          <Link to="/">Landing</Link>


      <Routes>
        <Route path='/logo' element={<LogoPage />} />
        <Route path='/home' element={<Test />} />
        <Route path='/' element={<Landing />} />


      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
