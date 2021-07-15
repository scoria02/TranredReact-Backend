import React from 'react';
import { useDispatch } from 'react-redux';
import { callSetActive } from '../../actions/call';
export const SubNavbar = () => {

    const dispatch = useDispatch();

   const handleAddNew1 = () => {
        
        let tipo = "Incidencia"
        dispatch(callSetActive(tipo))
    }
    const handleAddNew2 = () => {
       
        let tipo = "Informacion"
        dispatch( callSetActive(tipo) )
    }
    const handleCalls3 = () => {
        
        let tipo = "Queja"
        dispatch( callSetActive(tipo) )
    }
    const handleCalls4 = () => {
        
        let tipo = "Reclamo"
        dispatch( callSetActive(tipo) )
    }
    const handleCalls5 = () => {
        
        let tipo = "Requerimiento"
        dispatch( callSetActive(tipo) )

    }
    const handleCalls6 = () => {
        
        let tipo = "Solicitud"
        dispatch( callSetActive(tipo) )

    }
    const handleCalls7 = () => {
        
        let tipo = "Gestion"
        dispatch( callSetActive(tipo) )

    }
    const handleCalls8 = () => {
        
        let tipo = "Soporte"
        dispatch( callSetActive(tipo) )

    }
    const handleCalls9 = () => {
        
        let tipo = "Otros"
        dispatch( callSetActive(tipo) )

    }

    

    return (
        <div className= "Subnavbar_container">
           <section className="main2 ">
            <div
                className="subnavbar-brand mt-auto" 
            >
            <span 
            className="call__span_subnavbar"
            onClick= {handleAddNew1}
            > Incidencia </span> 
            </div>
            
            <div 
                className="subnavbar-brand ml-auto" 
                >
                <span 
                className="call__span_subnavbar"
                onClick= {handleAddNew2}
                > Información </span> 
            </div>

            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls3}
                > Queja </span> 
            </div>

            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls4}
                > Reclamo </span> 
            </div>
            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls5}
                > Requerimiento </span> 
            </div>
            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls6}
                > Solicitud </span> 
            </div>
            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls7}
                > Gestión </span> 
            </div>
            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls8}
                > Soporte </span> 
            </div>
            <div 
                className="subnavbar-brand ml-auto" 
                to="/"
            >
                <span className="call__span_subnavbar"
                onClick= {handleCalls9}
                > Otros </span> 
            </div>
            </section> 
        </div>
    )
}
