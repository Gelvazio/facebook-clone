/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './sidebar.css'

import SidebarRow from '../SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStateValue } from '../../config/StateProvider'

function Sidebar() {
    const [{ user }, ] = useStateValue()
    
    return (
        <div className="sidebar" >
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Centro de Informação"
            />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Paginas"
            />
            <SidebarRow
                Icon={PeopleIcon}
                title="Amigos"
            />
            <SidebarRow
                Icon={ChatIcon}
                title="Messenger"
            />

            <SidebarRow
                Icon={StorefrontIcon}
                title="Lojas"
            />

            <SidebarRow
                Icon={VideoLibraryIcon}
                title="Vídeos"
            />

            <SidebarRow
                Icon={ExpandMoreIcon}
                title="Lojas"
            />
        </div>
    )
}

export default Sidebar
