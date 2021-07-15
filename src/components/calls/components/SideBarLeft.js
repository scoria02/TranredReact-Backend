import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import '../assets/css/sidebarLeft.css';
import img from '../assets/img/avatar.png'    

export const SideBarLeft = () => {

    // const url = useSelector(state => state.auth)

    return (
        
        <aside className="call__sidebarleft">
           <div className="call__img">
                <img 
                    src={img} 
                    className="rounded-circle" 
                    alt="Cinque Terre"
                    
                />
                
            </div>
            <div className="call__entry-container">
                <h3 className="ml-3" > Mis Requerimientos</h3>
            
            
            </div>
                
    
    
                
    
        </aside>
        
    )
}
