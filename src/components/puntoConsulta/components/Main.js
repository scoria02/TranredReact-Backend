import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnhancedTable from './Tabla';
import { startFindPlan, startFindTerm } from '../../../actions/puntoConsulta';

import '../assets/css/main.css';

export const Main = () => {

    const dispatch = useDispatch()
    const {modalOpen} = useSelector(state => state.ui);
    const {termClient} = useSelector(state => state.puntoConsulta);
    
    
    const location =  useLocation();
    const {q = 'V15161929'} = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        search: q
 
    });
    const {search} = formValues;
    

    const  handleTypeChange =  ( e ) => {
        e.preventDefault();
        console.log( e.target.value)
        if (termClient) {
            
             dispatch( startFindPlan( e.target.value) )
        
        }
    }

    const handleIr = (e) => {
        e.preventDefault();
        if (search === '' ) {
            // console.log("No se puede enviar")
            return Swal.fire('Error', 'Error en campo de CI/Rif','error');
        } 
        else {
            console.log("Se puede enviar chamito chamito")
            console.log(search)

           
            dispatch( startFindTerm(search) )
        }

    }

    return (
        <div className={(!modalOpen)?"main":"main_container"}>
            <div className="main_container">
                <h1>Consulta Pagos de Clientes</h1>
                <div className="row mb-3">
                    <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                    <input 
                            type="text" 
                            className="input_search2" 
                            autoComplete="off"
                            placeholder="Cedula o Rif del cliente" 
                            name = "search"
                            onChange = {handleInputChange} 
                            value = {search}
                            
                        />  
                        <button
                            className="input_search_button2"
                            onClick={ handleIr }
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                        <select
                                    name="aboTerminal"
                                    className="select_search"
                                    // onClick={handleTypeChange}
                                    onChange={handleTypeChange}
                                    
                                >
                                <option value="00">Selecciona una Opcion</option>
                                        
                                {
                                    termClient.map(elemento => (
                                        <option key={elemento.aboTerminal} value={elemento.aboTerminal}>{elemento.aboTerminal}</option>
                                        
                                    ))
                                    
                                }
                            
                                </select>
                    </div>
                </div>
                <div className="main_tabla2">
                    <EnhancedTable />
                </div>
                <div className="main_tabla">

                </div>
            </div>
        </div>    
    )
}
