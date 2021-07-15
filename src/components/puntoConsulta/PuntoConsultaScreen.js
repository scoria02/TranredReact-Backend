import React from 'react';
import { SideBarLeft } from './components/SideBarLeft';

// import { Main } from './components/Main';
import './assets/css/puntoconsulta.css';
import { EstadoCuenta } from './components/EstadoCuenta';

export const PuntoConsultaScreen = () => {
    return (
        <div className="punto_container">
           
            <SideBarLeft />
            {/* <Main /> */}
            <EstadoCuenta />
        </div>
    )
}
