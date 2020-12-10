import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React ,{useState} from 'react'
import FeedOptions from './FeedOptions'
import './MessageSender.css'
import {useStateValue} from './StateProvider'

const MessageSender = () => {

    const [input ,setInput]=useState('')
    const [image ,setImage]=useState('')
    const [{user},dispatch] = useStateValue()

    const handleSubmit=(event)=>{
        event.preventDefault();

        setInput('');
        setImage('');

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src={''}/>
            <form>
                <input  value ={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={"What's on your mind?"+user} />
                <input value ={image} onChange={(e)=>setImage(e.target.value)}  type="text" placeholder="Image Url Here(optional)"/>
                <button onClick={handleSubmit} type="submit"> Hidden Button</button>
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
