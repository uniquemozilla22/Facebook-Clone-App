import { Chat, EmojiFlags, People, Storefront, VideoLibrary ,ExpandMoreOutlined} from '@material-ui/icons'
import React from 'react'
import SidebarRow from'./SidebarRow.js'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src={'https://www.yogesh-bhattarai.com/img/home-bg-2.jpg'} title={'Yogesh Bhattarai'}/>

            <SidebarRow Icon={EmojiFlags}
            title="Pages"/>
            <SidebarRow Icon={People}
            title="Friends"/>
            <SidebarRow Icon={Chat}
            title="Messenger"/>
            <SidebarRow Icon={Storefront}
            title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary}
            title="COVID-19 INFORMATION CENTER"/>
            <SidebarRow Icon={ExpandMoreOutlined}
            title="Marketplace"/>

        </div>
    )
}

export default Sidebar
