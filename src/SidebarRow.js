import React from 'react'

import './SidebarRow.css'

const SidebarRow = (props) => {
    return (
        <div className="sidebarRow">
            {props.title}
        </div>
    )
}

export default SidebarRow
