import React from 'react';
import { Navbar } from '../tranred/NavBar';

import { SideBarRight } from './components/SideBarRight';
import { SideBarLeft } from './components/SideBarLeft';
import { CallForm } from './components/CallForm';
import { ClientModal } from './components/ClientModal';
import '../calls/assets/css/callsScreen.css';

export const CallsScreen = () => {
    return (
        <>
            <Navbar />
            <div className = "container_all">
                <SideBarRight />
                <SideBarLeft />
                
            
                <CallForm />
                <ClientModal />
            
            </div> 
            
        </>
    )
}
