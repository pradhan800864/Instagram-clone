import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt= "Name" src="/static/images/avatar/1.jpg"/>
                <h3>User Name</h3>
            </div>

            <img class="post_image" src="https://i.imgur.com/7sA0l8r.jpg" alt="" />
            <h4 className="post__text"><b>Naga Pavan</b>  Hi Prends.... </h4> 
        </div>
    )
}

export default Post
