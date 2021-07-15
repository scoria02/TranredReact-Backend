import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

import chat from '../usercontroler/assets/img/Circle-icons-chat.svg.png';
import '../usercontroler/assets/css/chat.css';
export const AddModal = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
    }


    return (
        <div
            className="chat-btn"
            onClick={ handleClickNew }
        >
            <img src={chat} alt="chat box icon btn" />
        </div>
         
    )
}
