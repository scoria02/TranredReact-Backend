import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CallEntries } from './CallEntries'

export const SideBarLeft = () => {

    const {url} = useSelector(state => state.auth)

    return (
        
        <aside className="call__sidebarleft">
                
                <div className="call__entry-picture">
                    
                    <Link
                     className="dashclick" 
                     to="/calldashboard/"
                     
                    > DASHBOARD </Link>
                    
                    <div 
                        className="call__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ url })`
                        }}
                    >
                    </div>   
                </div>
                
    
                <div 
                    className="call__new-entry"
                    //  onClick={ hanledBan }
                >
                    
                    <h3 className="misreq mt-5" > Mis Requerimientos</h3>
                </div>
    
                <CallEntries />
    
            </aside>
    )
}
