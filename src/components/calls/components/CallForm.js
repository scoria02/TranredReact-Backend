import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFindDesc } from '../../../actions/call';
import { useForm } from '../../../hooks/useForm';

import '../assets/css/callform.css';

// client_id: 1
// description: "holas"
// request_id: "1"
// status_id: "1"
// type_request_id: "3"
// user_id: 28
//{request_id=1 => solicitud } type_request_id=3,4 => factura
const initEvent = {
    request_id: '',
    type_request_id: '',
    client_id: '',
    user_id: '',
    status_id: '1',
    description: ''

}

export const CallForm = () => {

    const dispatch = useDispatch();
    const {uid} = useSelector(state => state.auth)
    const {typeReqCall, desReqCall, findClient} = useSelector(state => state.call)
    const [formValue, setChange] = useForm(typeReqCall);
    const [formValues, setformValues] = useState(initEvent);
    const {description} = formValues;
    
    const handleInputChangen = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleTypeChange = ( e ) => {
        setChange( e );
        if (formValue.type_req) {
            console.log(formValue.type_req)
           dispatch( startFindDesc( formValue.type_req) )
           setformValues({
            ...formValues,
            request_id: formValue.type_req,
            client_id: findClient.id,
            user_id: uid
        })
        }
    }
    
    const handleDesChange = ( e ) => {
        setChange( e );
        setformValues({
            ...formValues,
            type_request_id: formValue.type_request_id
        })
        
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
    
            <div className = "form_container">
                
               
                
                    <form onSubmit={submitForm} className="p-3 form"> 
                        <h1 >Formulario de Requerimiento</h1>
                        <div className="row mb-2">
                        <div className="col-xs-6 col-sm-4 col-md-6 auto mt-5 form-group ">
                            <select
                                name="type_req"
                                className="form-control fondo"
                                onClick={handleTypeChange}
                                onChange={handleTypeChange}
                                
                            >
                            <option value="aqui">Selecciona una Opcion</option>
                                    
                            {
                                typeReqCall.map(elemento => (
                                    <option key={elemento.id} value={elemento.id}>{elemento.request}</option>
                                    
                                ))
                                
                            }
                        
                            </select>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-6 auto mt-5 form-group">
                            <select
                                name="type_request_id"
                                className="form-control fondo"
                                onClick={handleDesChange}
                                onChange={handleDesChange}
                                
                            >
                            <option value="0">Selecciona una Opcion</option>
                            {
                                desReqCall.map(elemento => (
                                    <option key={elemento.id} value={elemento.id}>{elemento.type_request}</option>
                                    
                                ))
                                
                            }

                            </select>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-12 auto form-group">
                            <textarea 
                                type="text" 
                                className="input_form2" 
                                autoComplete="off"
                                placeholder="Descripcion de problemas" 
                                name = "description"
                                onChange = {handleInputChangen} 
                                value = {description}
                            />
                            <small className="form-text-p">Descripcion del problema de cliente</small>
                        </div>
                        <div className="boton mt-2">
                            <button
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Guardar
                            </button>
                        </div>
                        </div>
                    </form>
                
            </div>
        
     
    )
}
