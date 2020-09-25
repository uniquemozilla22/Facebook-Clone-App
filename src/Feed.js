import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post profilePic={'https://www.yogesh-bhattarai.com/img/home-bg-2.jpg'}  message={'This is just awesome Man i just made React facebook application for website.'}
             username={'Yogesh Bhattarai'} image={'https://www.yogesh-bhattarai.com/img/home-bg-2.jpg'} />
        </div>
    )
}

export default Feed
