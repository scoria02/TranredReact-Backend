import React from 'react';
// import { useDispatch } from 'react-redux';


export const CallEntryRight = ({ tipo_solicitud, tipo_llamada}) => {

    // const dispatch = useDispatch();

    const handleEntryClick = () => {
        console.log('toy aqui')
    }

    const handleDoble = () => {
        console.log('doble click')
    }

    return (
        <div 
            className="call__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }
            onDoubleClick= {handleDoble}
        >
            
            <div className="call__entry-body" > 
                
                <p className="call__entry-title">
                    { tipo_solicitud }
                </p>
                <p className="call__entry-content">
                    { tipo_llamada }
                </p>
                
            </div>

            
        </div>
    )
}
