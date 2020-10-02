/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './login.css'

import { Button } from '@material-ui/core'
import { auth, provider } from '../../config/firebase'
import { actionTypes } from '../../config/reducer'
import { useStateValue } from '../../config/StateProvider'

function Login() {
    const [, dispatch] = useStateValue()

    const handleSingIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login" >
            <div className="login__logo">
                <img
                    className="login__logoFacebook"
                    src="https://awn.com.br/images/mdfacebook.png"
                    alt=""
                />
                <img
                    className="login__nomeFacebook"
                    src="https://noronhafrio.com.br/wp-content/uploads/2017/07/facebook-button.png"
                    alt=""
                />
            </div>

            <Button
                type="submit"
                onClick={handleSingIn}
            >
                Entrar
            </Button>
        </div>
    )
}

export default Login
