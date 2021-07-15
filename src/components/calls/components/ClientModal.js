import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { uiCloseModal } from '../../../actions/ui';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const initEvent = {
    name: '',
    ci_rif: '',
    phone: '',
    location: ''
}

export const ClientModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();
    const [ titleValid, setTitleValid ] = useState(true);
    const [formValues, setFormValues] = useState( initEvent );
    const { name, ci_rif, phone, location } = formValues;
    const activeId = useRef( modalOpen );

    useEffect(() => {
        if ( activeId ) {
            setFormValues( initEvent );
        }
    }, [setFormValues])

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
        // dispatch( eventClearActiveEvent() );
        setFormValues( initEvent );
    }

  
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if ( ci_rif.trim().length < 8 ) {
            return setTitleValid(false);
        }
        if ( name.trim().length < 2 ) {
            return setTitleValid(false);
        }
        if ( phone.trim().length < 11 ) {
            return setTitleValid(false);
        }
        if ( location.trim().length < 3 ) {
            return setTitleValid(false);
        }

        // if ( activeEvent ) {
        //     dispatch( eventStartUpdate( formValues ) )
        // } else {
        //     dispatch( eventStartAddNew(formValues) );
        // }


        setTitleValid(true);
        closeModal();
        
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
            <h1> Nuevo cliente </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Nombre y Apellido</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !titleValid && 'is-invalid' } `}
                        placeholder="Nombre y Apellido"
                        name="name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Cedula o Rif</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !titleValid && 'is-invalid' } `}
                        placeholder="CI o Rif: 32659854"
                        name="ci_rif"
                        autoComplete="off"
                        value={ ci_rif }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Telefono </label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !titleValid && 'is-invalid' } `}
                        placeholder="Tlf: 04242349876"
                        name="phone"
                        autoComplete="off"
                        value={ phone }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Direccion del Cliente"
                        rows="5"
                        name="location"
                        value={ location }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información requerida para cliente</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
