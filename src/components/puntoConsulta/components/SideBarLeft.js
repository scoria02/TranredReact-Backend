import React from 'react';

import foto from '../assets/img/itachi.jpg';
import item1 from '../assets/img/proceso.png';

import '../assets/css/sidebarleft.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal } from '../../../actions/ui';

export const SideBarLeft = () => {
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state => state.ui)
    

    console.log(modalOpen)

    const handleState = (e) => {
        e.preventDefault();
       if (!modalOpen) {
        dispatch( uiOpenModal() );
          console.log("sto cerro")
       }
        else{
            dispatch( uiCloseModal() );
            console.log("te abri")
            
       }
    }


    return (

        
            <aside 
            className= {(!modalOpen)?("sidebar_container")
            :("sidebar_container menu_collapsed")}
            
            >

                {/* Header del Container  */}
                <div className="sidebar_header">
                    <div className="sidebar_title">
                        <span>Cliente OnLine</span>
                    </div>
                    <div 
                        className="sidebar_menu_btn" 
                       onClick={handleState}
                        
                        
                    >
                        <div className="btn-hamburger"></div>
                        <div className="btn-hamburger"></div>
                        <div className="btn-hamburger"></div>
                    </div>
                </div>

                {/* Profline del Cliente  */}

                <div className="sidebar_profile">
                    <div className="sidebar_foto">
                        <img src={foto} alt="Itachi" />
                    </div>
                    <div className="sidebar_name">
                        <span>Aldrin Mendoza</span>
                    </div>
                </div>

                {/* Items  */}

                <div className="menu_items">
                    <div className="item">
                        <a href="aquiruta">
                            <div className="icon">
                                <img src={item1} alt="Item1"></img>
                            </div>
                            <div className="title">
                                <span>Titulo de parte a usar</span>
                            </div>
                        </a>
                    </div>
                    <div className="item separador"></div>
                    <div className="item">
                        <a href="aquiruta">
                            <div className="icon">
                                <img src={item1} alt="Item1"></img>
                            </div>
                            <div className="title">
                                <span>Titulo de parte a usar</span>
                            </div>
                        </a>
                    </div>
                </div>

               
            </aside>

        
        
    )
}
