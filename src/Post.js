import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src ={props.profilePic}/>
            <div className="post_topInfo">
                <h3>{props.username}</h3>
                <p>11:11AM</p>
            </div>

            </div>

            <div className="post__bottom">
                <p>{props.message}</p>
            </div>
            <div className="post__image">
                <img src={props.image} alt={props.username+"'s Posted: "+props.message}/>    
            </div>
            
            <div className="post__options">
            <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe/>
                    <p>Share</p>
                </div><div className="post__option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
                
            </div>
        </div>
    )
}

export default Post
