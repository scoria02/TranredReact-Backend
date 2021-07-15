import React, { useEffect } from 'react';
import { Navbar } from '../tranred/NavBar';
import { SideBarLeft } from './SideBarLeft';
import { SideBarRight } from './SideBarRight';
import { useDispatch, useSelector } from 'react-redux';

import './callcenter.css'
import { SubNavbar } from './SubNavbar';
import { startLoadingCalls } from '../../actions/call';
import { FormIncidencia } from './callform/FormIncidencia';
import { NothingSelected } from './callform/NothingSelected';
import { FormInformacion } from './callform/FormInformacion';
import { FormQueja } from './callform/FormQueja';
import { FormReclamo } from './callform/FormReclamo';
import { FormRequerimiento } from './callform/FormRequerimiento';
import { FormSolicitud } from './callform/FormSolicitud';
import { FormGestion } from './callform/FormGestion';
import { FormSoporte } from './callform/FormSoporte';
import { FormOtros } from './callform/FormOtros';

export const CallCenterScreen = () => {
    
    const {uid} = useSelector(state => state.auth)
    const {callForm} = useSelector(state => state.call)
    const dispatch = useDispatch()
    
    useEffect(() => {
        
        dispatch( startLoadingCalls(uid) );

    }, [ dispatch, uid])

    return (
        <div className="Call_screen_container animate__animated animate__fadeIn animate__faster">
            <Navbar />
            <SideBarLeft />
            <SideBarRight />
            <SubNavbar />

            { 
                (!callForm) &&
                <NothingSelected /> 
            }
            
            {
                (callForm === "Incidencia") &&
                <FormIncidencia />
            }
            {
                (callForm === "Informacion") &&
                <FormInformacion />
            }
            {
                (callForm === "Queja") &&
                <FormQueja />
            }
            {
                (callForm === "Reclamo") &&
                <FormReclamo />
            }
            {
                (callForm === "Requerimiento") &&
                <FormRequerimiento />
            }
            {
                (callForm === "Solicitud") &&
                <FormSolicitud />
            }
            {
                (callForm === "Gestion") &&
                <FormGestion />
            }
            {
                (callForm === "Soporte") &&
                <FormSoporte />
            }
            {
                (callForm === "Otros") &&
                <FormOtros />
            }

           
        </div>       
    )
}
