import React, { Component } from 'react';
import './App.css';



const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg'/>
        </header>
        <nav className='nav'>
        <a>Profile</a>
        <a>Messages</a>
        <a>News</a>
        <a>Music</a>
        <a>Settings</a>
        </nav>
        <div className='content'>
          <img src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'/>
        </div>
    </div>
  );
}

export default App;