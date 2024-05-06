import React from 'react';
import './App.css';
import Headers from './components/js/Header';
import Login from './components/js/Login';
import EnterOpenAIKey from './components/js/EnterOpenAIKey';
import RegisteredUser from './components/js/RegisteredUser'; 
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Headers />
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/enter-your-key' element={<EnterOpenAIKey />} />
          <Route path='/registered' element={<RegisteredUser />} />
        </Routes>
    </>
  );
}

export default App;
