import { Avatar } from '@material-ui/core'
import React from 'react'

import './SidebarRow.css'

const SidebarRow = (props) => {
    let Icon =props.icon

    let printing=<Icon/>
    if(props.src!=null)
    {
         printing = <Avatar src={props.src}/>
    }
    
    return (
        <div className="sidebarRow">
            {printing}
            <h4>{props.title}</h4>
        </div>
    )
}

export default SidebarRow
