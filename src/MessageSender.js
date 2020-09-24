import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React from 'react'
import FeedOptions from './FeedOptions'
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
                    <FeedOptions title="Live Video" icon={Videocam} colored="red"/>
                    </div>
                <div className="messageSender__option">
                    <FeedOptions title="Photo/Video" icon={PhotoLibrary} colored="green"/>
                    </div>
                <div className="messageSender__option">

                    <FeedOptions title="Feeling/Activity" icon={InsertEmoticon} colored="red"/>
                </div>
                
            </div>
        </div>
    )
}

export default MessageSender
