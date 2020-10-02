/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import './widgets.css'

function Widgets() {
    return (
        <div className="widgets" >
            <iframe
                title="Concursos Brasil"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fconcursoro%2F&tabs=timeline&width=340&heigth=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="320" 
                height="100%"  
                style={{
                    border: "none",
                    overflow: "hidden",
                }} 
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"   
            />
        </div>
    )
}

export default Widgets
