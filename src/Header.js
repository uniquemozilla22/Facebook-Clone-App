import SearchIcon  from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import React from 'react'
import './Header.css'
import AddIcon from '@material-ui/icons/Add'
import { ExpandMore,StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle,Forum,NotificationsActive } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import logo from './Logo/th.jpg'
import thoda from './Logo/home-bg-2.jpg'
import {useStateValue} from './StateProvider'


const Header = () => {

    const [{user},dispatch]=useStateValue();
   
    return (
        <div className={"header"}>
            <div className="header__left">
                <img src={logo} alt="Facebook-Clone"/>
            
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Facebook"/>

            </div>
            
            </div>
            <div className="header__center">

                <div className="header__option header__option__active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div><div className="header__option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div><div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div><div className="header__option" >
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <Forum/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActive />
                    </IconButton>
                    <IconButton>
                        <ExpandMore/>
                    </IconButton>

                </div>
             </div>
        </div>
    )
}

export default Header
