/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './story.css'

import { Avatar } from '@material-ui/core'

function Story({ image, profileSrc, title }) {
    return (
        <div 
            style={{ backgroundImage: `url(${image})` }}
            className="story" 
        >
            <Avatar className="story__avatar"  src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
