import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'


const Story = (props) => {

    return (
        <div style={{backgroundImage:'url('+props.image+')'}} className="story" >
            <Avatar className="story__avatar" src={props.profileSrc}/>
            <h4>{props.title}</h4>
            
        </div>
    )
}

export default Story
