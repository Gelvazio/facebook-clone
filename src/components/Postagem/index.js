/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './postagem.css'

import { Avatar } from '@material-ui/core'

import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Postagem({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="postagem" >
            <div className="postagem__top" >
                <Avatar className="postagem__avatar" src={profilePic} />
                <div className="postagem__topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="postagem__bottom">
                <p>{message}</p>
            </div>

            <div className="postagem__image">
                <img src={image} alt=""/>
            </div>

            <div className="postagem__options">
                <div className="postagem__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="postagem__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comentário</p>
                </div>
                <div className="postagem__option">
                    <NearMeIcon />
                    <p>Compartilhar</p>
                </div>
                <div className="postagem__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Postagem
