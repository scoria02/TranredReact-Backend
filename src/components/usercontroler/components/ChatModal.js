import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../../actions/ui';

import  '../assets/css/chat.css';
// import send from '../assets/img/send.png';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      
    }
    
};

export const ChatModal = () => {

    const {name, url} = useSelector(state => state.auth);
    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
    }

    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <div className="client">
             <img src={url} alt="logo" />
                    <div className="client-info">
                        <h2>{name}</h2>
                        <p>online</p>
                    </div>
            </div>
            <form 
                className="container"
                // onSubmit={ handleSubmitForm }
            >
            <hr />
                <div className="form-group">
                     <div id="chat-container">
                        <div id="chat-window">
                            <div id="output"></div>
                            <div id="actions"></div>
                        </div>
                        
                        <input  type="text" id="message" placeholder="mensaje" />
                        <button id="send"> Send </button>
                    </div>
                </div>    

                

                

            </form>
            

        </Modal>
    )
}
