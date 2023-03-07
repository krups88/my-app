import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 2, message: "it's my first post", likesCount: 22 },
    { id: 3, message: 'Hi, how are you?', likesCount: 12 },
    { id: 4, message: "it's my first post", likesCount: 14 }]

let dialogs = [
    {id: 1, name: 'Bohdan'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Yura'},
    {id: 4, name: 'Mara'},
    {id: 5, name: 'Gron'},
    {id: 6, name: 'Tolik'}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
