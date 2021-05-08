import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({username, caption, imageURL}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt= "Name" src="/static/images/avatar/1.jpg"/>
                <h3>{username}</h3>
            </div>

            <img class="post_image" src={imageURL} alt="" />
            <h4 className="post__text"><b>{username}</b>  {caption} </h4> 
        </div>
    )
}

export default Post
