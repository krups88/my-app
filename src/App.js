import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Buy'},
        {id: 3, message: 'how are you '},
        {id: 4, message: 'kamasutra'}]


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={messages}/>}/>
                        <Route path='/profile' element={<Profile postData={props.postData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;


