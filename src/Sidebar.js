import { Chat, EmojiFlags, People, Storefront, VideoLibrary ,ExpandMoreOutlined} from '@material-ui/icons'
import React from 'react'
import SidebarRow from'./SidebarRow.js'
import './Sidebar.css'
import { useStateValue } from './StateProvider.js'

const Sidebar = () => {

    const [{user}, dispatch]= useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>

            <SidebarRow icon={EmojiFlags}
            title="Pages"/>
            <SidebarRow icon={People}
            title="Friends"/>
            <SidebarRow icon={Chat}
            title="Messenger"/>
            <SidebarRow icon={Storefront}
            title="Marketplace"/>
            <SidebarRow icon={VideoLibrary}
            title="Video"/>
            <SidebarRow icon={ExpandMoreOutlined}
            title="Marketplace"/>

        </div>
    )
}

export default Sidebar
