import React, { useEffect, useRef} from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../../hooks/useForm';
import { useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import { startFindClient } from '../../../actions/call';

// import { useForm } from '../../hooks/useForm'
// import { CallEntriesRight } from './CallEntriesRight'
// import { CalendarModal } from '../calendar/CalendarModal';
// import { AddModal } from '../ui/AddModal';
// import { ChatModal } from '../usercontroler/components/ChatModal';
// import { Chat } from '../usercontroler/components/Chat';

import '../assets/css/sidebarRight.css';
import { useFormClient } from '../../../hooks/useFormClient';
import Swal from 'sweetalert2';

export const SideBarRight = () => {

   
    
    const { findClient:note } = useSelector( state => state.call );
    const [ clientValues, handleInputChangeClient, reset ] = useFormClient( note );

    const {name, phone, location:locations} = clientValues
    const dispatch = useDispatch();
    const location =  useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
       search: q,
       opcion: 'V'

    });
    const {search, opcion} = formValues;
    const activeId = useRef( note.id );
    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
            
        }

    }, [note, reset])

    const handleFind = (e) => {
        e.preventDefault();
        if (search === '' ) {
            // console.log("No se puede enviar")
            return Swal.fire('Error', 'Error en campo de CI/Rif','error');
        } 
        if ( opcion === '' ) {
            // console.log("No se puede enviar")
            return Swal.fire('Error', 'Seleccione Tipo de CI/Rif','error');
        }
        else {
            console.log("Se puede enviar")
            console.log(`${opcion}-${search}`)
           
            // dispatch( startFindClient(`${opcion}-${search}`) )
        }
        
    }
    
    return (
        
            <aside className="call__sidebarRight">
                
                <div className="call__sidebarRight-navbar">
                       
                <form onSubmit={handleFind}  > 
                        <div className="mt-4">
                             <h3> Buscar Cliente</h3>
                        </div>
                    <div >
                       
                    <select
                        type="text"
                        name="opcion"
                        required
                        className="input_search_opt fondo"
                        onClick= {handleInputChange}
                        onChange= {handleInputChange}
                        
                    >
                        {/* <option value = {opcion}>--</option> */}
                        <option value = "V" >V</option>
                        <option value="J">J</option>
                                
                    </select>
                    <input 
                        type="text" 
                        className="input_search" 
                        autoComplete="off"
                        placeholder="Cedula o Rif del cliente" 
                        name = "search"
                        onChange = {handleInputChange} 
                        value = {search}
                        
                    />  
                    <button
                        className="input_search_button"
                        onClick={ handleFind }
                    >
                        <i className="fas fa-search"></i>
                    </button>  
                    </div>
                    
                </form>
                </div>
                   <div className="contex">
                      <h3> Informacion de Cliente</h3>
                        <div className="container_info">
                            <input 
                                type="text"
                                placeholder="Nombre cliente"
                                className="input ml-3"
                                //autoComplete="off"
                                name = "name"
                                value = {name}
                                onChange={ handleInputChangeClient }
                                disabled
                            />
                        
                            <input 
                                type="text"
                                placeholder="Telefono"
                                className="input ml-3"
                                autoComplete="off"
                                value = {phone}
                                name = "phone"
                                onChange={ handleInputChangeClient }
                                disabled
                            />
                            
                            <textarea 
                                type="text"
                                placeholder="Direccion"
                                className="input textarea ml-3"
                                autoComplete="off"
                                value = {locations}
                                name = "location"
                                onChange = { handleInputChangeClient }
                                disabled
                            />
                       </div>
                    </div>
                    <div className= "call__sidebarRight-navbar mt-3">
                    <h3> Solicitudes Hechas</h3>
                    </div>
                   
               

            </aside>
    )
}
