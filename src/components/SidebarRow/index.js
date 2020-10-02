import { Avatar } from '@material-ui/core'
/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './sidebarrow.css'

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="siderbarrow" >
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
