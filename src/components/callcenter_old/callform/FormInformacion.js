import React from 'react';

import './form.css';
import '../callcenter.css';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startNewCall } from '../../../actions/call';

export const FormInformacion = () => {
    
    const {uid, name} = useSelector(state => state.auth);
    const { callForm } = useSelector(state => state.call);
    const dispatch = useDispatch();
    
    const newCall = {
        tipo_solicitud: callForm,
        tipo_llamada: '',
        num_rif_ci: '',
        nombre_cliente: '',
        direccion: '',
        id_user: uid,
        nombre_user: name,
        estado: 'Nueva'
    }
    const [ formValues, handleInputChange ] = useForm( newCall );
    const {num_rif_ci, nombre_cliente, direccion,  } = formValues;
    const handleSave = (e) => {
        e.preventDefault();
        dispatch( startNewCall( formValues ) );
    }

    return (
        <div className="from_container">
            <div className="abs-center">
                <form className="border p-3 form" onSubmit={handleSave}>
                    <h1>Call Center</h1>
                    <div className="form-group ">
                        <input 
                            type="text"
                            placeholder={callForm}
                            className="input form2"
                            autoComplete="off"
                            name="tipo_solicitud"
                            value={callForm}
                            // onChange={ handleInputChange }
                        />
                       <input 
                            type="text"
                            placeholder="num_rif_ci"
                            className="input form2 ml-2"
                            autoComplete="off"
                            name="num_rif_ci"
                            value={num_rif_ci}
                            onChange={ handleInputChange }
                        />
                    
                    <select 
                        type="text"
                        className="input form3"
                        autoComplete="off"
                        name="tipo_llamada"
                        onChange={ handleInputChange }
                    >
                    <option value="Agente Comercial">Agente Comercial</option>
                    <option value="Abonos">Abonos</option>
                    <option value="Producto">Producto</option>
                    <option value="Captación de aci">Captación de aci</option>
                    <option value="Estatus de cambio de Cuenta Bancaria">Estatus de cambio de Cuenta Bancaria</option>
                    <option value="Estatus de las solicitudes">Estatus de las solicitudes</option>
                    <option value="Punto Consulta">Punto Consulta</option>
                    <option value="Nuevo Modelo de Negocios">Nuevo Modelo de Negocios</option>
                    <option value="Zona no atendida">Zona no atendida</option>
                    </select>
                    
                        <input 
                            type="text"
                            placeholder="nombre_cliente"
                            className="input form2"
                            autoComplete="off"
                            name="nombre_cliente"
                            value={nombre_cliente}
                            onChange={ handleInputChange }
                        />
                   
                        <textarea 
                            type="text"
                            placeholder="direccion"
                            className="input form3"
                            autoComplete="off"
                            name="direccion"
                            value={direccion}
                            onChange={ handleInputChange }
                        />
                    </div>
                    
                    <button
                     type="submit" 
                     className="btn btn-primary"
                     >Save</button>
                 </form>
            </div>
        </div>

)
}
