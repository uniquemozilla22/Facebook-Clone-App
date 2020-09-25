import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React ,{useState} from 'react'
import FeedOptions from './FeedOptions'
import './MessageSender.css'
const MessageSender = () => {

    const [input ,setInput]=useState('')
    const [image ,setImage]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();

        setInput('');
        setImage('');

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src="https://www.yogesh-bhattarai.com/img/home-bg-2.jpg"/>
            <form>
                <input  value ={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="What's on your mind?" />
                <input value ={image} onChange={(e)=>setImage(e.target.value)}  type="text" placeholder="Image Url Here(optional)"/>
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
