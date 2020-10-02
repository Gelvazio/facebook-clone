/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React, { useEffect, useState } from 'react'
import './feed.css'

import StoryReel from '../StoryReel'
import MessengerSend from '../MessengerSend'
import Postagem from '../Postagem'

import db from '../../config/firebase'

function Feed() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => 
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        );
    }, [])

    return (
        <div className="feed" >
            <StoryReel />
            <MessengerSend />  

            {posts.map((post) => (
                <Postagem 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                /> 
            ))}
        </div>
    )
}

export default Feed
