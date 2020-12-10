import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React ,{useState} from 'react'
import FeedOptions from './FeedOptions'
import './MessageSender.css'
import {useStateValue} from './StateProvider'
import {db} from './firebase'
import firebase from 'firebase'

const MessageSender = () => {  

    const [input ,setInput]=useState('')
    const [imageUrl ,setImageUrl]=useState('')
    const [{user},dispatch] = useStateValue()

    const handleSubmit=(event)=>{
        event.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username: user.displayName,
            image:imageUrl
        })
        setInput('');
        setImageUrl('');

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
            <form>
                <input  value ={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={"What's on your mind?"+user.displayName} />
                <input value ={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}  type="text" placeholder="Image Url Here(optional)"/>
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
