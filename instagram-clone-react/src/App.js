import './App.css';
import React, { useState } from 'react';
import Post from './Post'
function App() {
  const [posts, setPosts]= useState([
  {userName:"Manoj Kiran", caption:"Yo Mam Chill...", imageURL: "https://i.imgur.com/QFbBwXY.jpg"},
  {userName: "Kullu Manali", caption: "Memories...", imageURL: "https://i.imgur.com/EMoBy0e.jpg"},
  {userName: "Totti Fellow", caption: "totti ga", imageURL: "https://i.imgur.com/8YpJp3C.jpg"}
  ]);



  return (
    <div className="app">
      {/* <h1>Instagram-Clone</h1> */}

      <div className="app__header">
      <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
      </div>
      <h3> InstaGram </h3>

      {
        posts.map(post => (
          <Post userName={post.userName} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }

      {/* <Post userName="Manoj Kiran" caption="Yo Mam Chill..." imageURL="https://i.imgur.com/QFbBwXY.jpg"/>
      <Post userName="Kullu Manali" caption="Memories..." imageURL="https://i.imgur.com/EMoBy0e.jpg"/>

      <Post userName="Totti Fellow" caption="totti ga" imageURL="https://i.imgur.com/8YpJp3C.jpg"/> */}

    </div>
  );
}

export default App;
