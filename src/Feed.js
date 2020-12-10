import React,{useState ,useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import database from './firebase'


const Feed = () => {

    const [posts,setPosts]=useState([]);

    useEffect(() => {
        
        return () => {
            database.collection('posts').onSnapshot(snapshot =>{
                setPosts(snapshot.docs.map((doc)=>({id:doc.id, data :doc.data()})))
            })
        }
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            {posts.map(post=>{
                return <Post 
                timeStamp={post.data.timeStamp}
                profilePic={post.data.profilePic}  
                message={post.data.message}
                username={post.data.username} 
                image={post.data.image} />
            })}
           
        </div>
    )
}

export default Feed
