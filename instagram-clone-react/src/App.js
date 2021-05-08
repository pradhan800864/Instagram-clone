import './App.css';
import React, { useEffect, useState } from 'react';
import Post from './Post'
import { db } from './firebase'

function App() {
  const [posts, setPosts]= useState([

  ]);

  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc  => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  },[]); 

  return (
    <div className="app">
      <div className="app__header">
      <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
      </div>
      <h3> InstaGram </h3>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }

      {/* <Post userName="Manoj Kiran" caption="Yo Mam Chill..." imageURL="https://i.imgur.com/QFbBwXY.jpg"/>
      <Post userName="Kullu Manali" caption="Memories..." imageURL="https://i.imgur.com/EMoBy0e.jpg"/>

      <Post userName="Totti Fellow" caption="totti ga" imageURL="https://i.imgur.com/8YpJp3C.jpg"/> */}

    </div>
  );
}

export default App;
