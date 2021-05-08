import './App.css';
import React from 'react';
import Post from './Post'
function App() {
  return (
    <div className="app">
      {/* <h1>Instagram-Clone</h1> */}

      <div className="app__header">
      <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
      </div>
      <h3> Instagram </h3>

      <Post />
      <Post />

      <Post />

    </div>
  );
}

export default App;
