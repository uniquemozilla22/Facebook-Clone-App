import React,{useState ,useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import {db} from './firebase'


const Feed = () => {

    const [posts,setPosts]=useState([]);

    useEffect(() => {
        
            db.collection('posts').onSnapshot(snapshot =>{
                console.log(snapshot);
                setPosts(snapshot.docs.map((doc)=>({id:doc.id, data :doc.data()})))
            })
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            {posts.map(post=>{
                return <Post 
                key={post.id}
                timeStamp={post.data.timeStamp}
                profilePic={post.data.profilePic}  
                message={post.data.message}
                username={post.data.username} 
                image={post.data.image} />
            })}
            <Post 
                timeStamp={"Today"}
                profilePic={"https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"}  
                message={"Posted the post"}
                username={"Yogesh Bhattarai"} 
                image={"https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"} />
           
        </div>
    )
}

export default Feed
