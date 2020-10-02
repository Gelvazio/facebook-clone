/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React, { useState } from 'react'
import firebase from 'firebase'
import db from '../../config/firebase'
import './messengersend.css'

import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../config/StateProvider'

import VideoCallIcon from '@material-ui/icons/VideoCall'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


function MessengerSend() {
    const [{ user }, ] = useStateValue()
    
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput("")
        setImageUrl("")
    }

    return (
        <div className="messengersend" >
            <div className="messengersend__top">
                <Avatar
                    src={user.photoURL}
                    alt={user.displayName}
                />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messengersend__input"
                        type="text"
                        placeholder={`O que você está pensando neste momento, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="URL da imagem (Opcional)"
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                    >
                        Envio Oculto
                    </button>
                </form>
            </div>
            <div className="messengersend__bottom">
                <div className="messengersend_option">
                    <VideoCallIcon style={{ color: "red" }} />
                    <h3>Live ao vivo</h3>
                </div>

                <div className="messengersend_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Foto/Vídeo</h3>
                </div>

                <div className="messengersend_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Sentimento/Atividade</h3>
                </div>
            </div>
        </div>
    )
}

export default MessengerSend
