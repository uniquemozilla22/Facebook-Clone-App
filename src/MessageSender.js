import { Avatar } from '@material-ui/core'
import React from 'react'
import './MessageSender.css'
const MessageSender = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar/>
            <form>
                <input type="text" placeholder="What's on your mind?" />
                <input type="text" placeholder="Image Url Here(optional)"/>
                <button onCLick={handleSubmit} type="submit"> Hidden Button</button>
            </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCam style={{color:'red'}}/>
                    <h3>Live Video</h3>

                </div>
                
            </div>
        </div>
    )
}

export default MessageSender
