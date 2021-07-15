import React from 'react';
import { Navbar } from '../tranred/NavBar';
import { SidebarControl } from './components/SidebarControl';


import './assets/css/usercontroler.css';
import { InfoControl } from './components/InfoControl';
import { useSelector } from 'react-redux';

export const UserControlerScreen = () => {

    const {userControlFind: active} = useSelector(state => state.userControl)

    return (
        <> 
            <Navbar />
            <div 
                className="controler__main-content animate__animated animate__fadeIn animate__faster"
            >
                
               <SidebarControl />


                {/* Inicio  */}
                {
                    ( active ) &&
                        ( <InfoControl /> )
                }
                

                
                

            </div>
        </>
    )
}
