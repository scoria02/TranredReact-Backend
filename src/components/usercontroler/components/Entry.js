import React from 'react';

import '../assets/css/entries.css';

export const Entry = ( { 
    
    nombre, 
    url, 
    
 } ) => {

    
    return (
        <div 
            className="Entries__entry pointer animate__animated animate__fadeIn animate__faster"
            
        >
            
            {
                url &&
                <div 
                    className="Entries__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className="Entries__entry-body">
                <p className="Entries__entry-title">
                    { nombre }
                </p>
                
            </div>

            
        </div>
    )
}
