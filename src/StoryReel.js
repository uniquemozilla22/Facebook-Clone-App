import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = (props) => {

    return (
        <div className="storyReel">
            <Story profileSrc="https://www.yogesh-bhattarai.com/img/home-bg-2.jpg" image="https://www.yogesh-bhattarai.com/img/home-bg-2.jpg" title="Yogesh"/>
            <Story profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShDWClCXGxjbyiY2mfjnoex6pQfcx7Ll0CSA&usqp=CAU" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShDWClCXGxjbyiY2mfjnoex6pQfcx7Ll0CSA&usqp=CAU" title="Dipti"/>
            <Story profileSrc="https://www.yogesh-bhattarai.com/img/home-bg-2.jpg" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7E2gifOhSOMW8ZGW2iJGu1M_V9UmevpyxWQ&usqp=CAU" title="Rajesh"/>
            <Story profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTpx02ZiMrQTH0PtAv9p-z5p4XCUymE58UGg&usqp=CAU" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTpx02ZiMrQTH0PtAv9p-z5p4XCUymE58UGg&usqp=CAU" title="Deepak"/>
            <Story profileSrc="https://www.befunky.com/images/wp/wp-2018-08-Instagram-Story-Templates-20.jpg?auto=webp&format=jpg&width=1184" image="https://www.befunky.com/images/wp/wp-2018-08-Instagram-Story-Templates-20.jpg?auto=webp&format=jpg&width=1184" title="Sarah"/>
        </div>
    )
}

export default StoryReel
