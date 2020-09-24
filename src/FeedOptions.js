import React from 'react'
import './FeedOption.css'

const FeedOptions = (props) => {

    let Icon =props.icon;
    return (
        <div className="feedOption">            
            <Icon style={{color:props.colored}}/>
                    <h3>{props.title}</h3>
        </div>
    )
}

export default FeedOptions
