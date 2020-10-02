/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './header.css'

import Facebook from '../../assets/facebook.svg'

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from '../../config/StateProvider'

function Header() {
    const [{ user }, ] = useStateValue()

    return (
        <div className="header" >
            <div className="header__left">
                <img
                    src={Facebook}
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input 
                        type="text" 
                        placeholder="Buscar no facebook"
                    />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option__active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar 
                        src={user.photoURL}
                        alt=""
                    />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
