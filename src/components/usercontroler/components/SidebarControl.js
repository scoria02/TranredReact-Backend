import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useForm } from '../../../hooks/useForm';
import queryString from 'query-string';
import { Entries } from './Entries';
import { startFindEmail } from '../../../actions/userControl';

import '../assets/css/sidebarcontrol.css';
import '../assets/css/entries.css';
export const SidebarControl = () => {

    const {url} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const location =  useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
       search: q
    });
    const {search} = formValues;

    

    const handleFind = (e) => {
        e.preventDefault();
        dispatch( startFindEmail( search ) );
    }

    return (
        <aside className="control__sidebar">
            <div className="control__sidebar-perfil">
                <h4>Mi Perfil</h4>
            </div> 
            
            <div className="control__sidebar-navbar ">

            <div 
                className="control__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ url })`
                        }}
                    >
            </div>  
                
            </div>
            <div className="control__sidebar-navbar2 ">
                <form
                    onSubmit = {handleFind}
                    className = "control__sidebar-search"
                >  
                    <input 
                    type="text" 
                    className="input " 
                    autoComplete="off"
                    placeholder="Email" 
                    name = "search"
                    onChange = {handleInputChange} 
                    value = {search}
                    />
                    <button 
                        type="submit"
                        className="btn btn-primary ml-4"
                        >
                        Buscar
                    </button>  
                    
                </form>
            </div>         

            <Entries />

        </aside>
    )
}
