import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/main_page/Hero';
import './App.css';
import Signin from './components/Sign in/Signin';
import Create_acc from './components/Cerate_acc/Create_acc';
import Account from './components/Account/Account';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/create_acc" element={<Create_acc />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
