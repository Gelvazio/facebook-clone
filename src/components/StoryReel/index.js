/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './storyreel.css'

import Img01 from '../../assets/001.jpg'
import Img02 from '../../assets/002.jpg'
import Img03 from '../../assets/003.jpg'
import Img04 from '../../assets/004.png'
import Img05 from '../../assets/005.jpg'

import Story from '../Story'

function StoryReel() {
    return (
        <div className="storyreel" >
            <Story
                className="storyreel__story"
                image={Img01}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Silvanei Martins"
            />
            <Story
                className="storyreel__story"
                image={Img02}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Silvanei"
            />
            <Story
                className="storyreel__story"
                image={Img03}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Silvio Almeida"
            />
            <Story
                className="storyreel__story"
                image={Img04}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Silvio"
            />
            <Story
                className="storyreel__story"
                image={Img05}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Roberto Silva"
            />
            <Story
                className="storyreel__story"
                image={Img01}
                profileSrc="https://avatars1.githubusercontent.com/u/4657811?s=460&u=e102f06ce1be2e5b17e746abc3b025382d5db02f&v=4"
                title="Silvanei Martins"
            />
        </div>
    )
}

export default StoryReel
