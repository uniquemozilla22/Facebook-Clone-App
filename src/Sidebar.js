import React from 'react'
import SidebarRow from'./SidebarRow.js'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <SidebarRow title="friends"/>
            <SidebarRow title="contactUs"/>
            <SidebarRow title="DiscoverPeople"/>
            <SidebarRow title="FindFriends"/>
            <SidebarRow title="Play Games"/>  
        </div>
    )
}

export default Sidebar
