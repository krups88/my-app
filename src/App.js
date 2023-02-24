import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        {/* <Dialogs /> */}
        <Profile />
      </div>
    </div>);
}

export default App;