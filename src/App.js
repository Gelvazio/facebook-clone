import React from 'react'
import './app.css'

import Header from './components/Header'
/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'

import { useStateValue } from '../src/config/StateProvider'

function App() {
    const [{ user }, ] = useStateValue()

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                    <>
                        <Header />

                        <div className="app__body">
                            <Sidebar />
                            <Feed />
                            <Widgets />
                        </div>
                    </>
                )}
        </div>
    )
}

export default App
