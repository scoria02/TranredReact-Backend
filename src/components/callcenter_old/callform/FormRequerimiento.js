import React from 'react';

import './form.css';
import '../callcenter.css';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startNewCall } from '../../../actions/call';

export const FormRequerimiento = () => {
    
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
                    <option value="Aclaratoria por abono">Aclaratoria por abono</option>
                    <option value="Uso inadecuado del POS">Uso inadecuado del POS</option>
                    <option value="Adecuado suministro de rollos">Adecuado suministro de rollos</option>
                    <option value="Declaración de Retención de IVA">Declaración de Retención de IVA</option>
                    <option value="Cambio de cuenta Bancaria">Cambio de cuenta Bancaria</option>
                    <option value="Cambio de correo electrónico">Cambio de correo electrónico</option>
                    <option value="Reset de usuario">Reset de usuario</option>
                    <option value="Cambio de Equipo">Cambio de Equipo</option>
                    <option value="Detalle de deuda">Detalle de deuda</option>
                    <option value="Actualización de Datos">Actualización de Datos</option>
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
