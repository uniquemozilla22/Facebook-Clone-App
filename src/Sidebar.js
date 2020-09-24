import { Chat, EmojiFlags, People, Storefront, VideoLibrary ,ExpandMoreOutlined} from '@material-ui/icons'
import React from 'react'
import SidebarRow from'./SidebarRow.js'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src={'https://www.yogesh-bhattarai.com/img/home-bg-2.jpg'} title={'Yogesh Bhattarai'}/>

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
