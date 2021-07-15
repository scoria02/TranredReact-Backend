import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';

import '../assets/css/infocontroler.css'

export const InfoControl = () => {
    const {userControlFind} = useSelector(state => state.userControl);
    const [value, setChange, reset] = useForm(userControlFind);
    const {
        
        nombre, 
        email,
        url, 
        status, 
        producto, 
        wallet, 
        supervisor, 
        admin,
        cat,
        milpagos,
        llamadas,
    } = value;
    
    const activeId = useRef( userControlFind.id );

    useEffect(() => {
        
        if ( userControlFind.id !== activeId.current ) {
            reset( userControlFind );
            activeId.current = userControlFind.id
        }

    }, [userControlFind, reset])
    


    return (
        <div className="container control-container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-12 auto control-form-1">
                    <h3>InFormacion</h3>
                    <hr/>
                    <form >
                        <div className="row mb-2">
                            <div className="col-xs-6 col-sm-4 col-md-6 auto form-group ">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder= "Nombre"
                                    autoComplete = "off"
                                    name = "nombre"
                                    value= { nombre }
                                    onChange={ setChange }
                                />
                                
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-6 auto form-group ">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="URL"
                                    name="url"
                                    value={ url }
                                    onChange={ setChange }
                                />
                                
                            </div>
                        </div>
                        <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                readOnly
                                disabled
                                value={ email }
                                // onChange={ handlecontrolInputChange }
                            />
                        </div>
                        <div className="row mb-2">
                            <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                    name="rPassword1"
                                    // value={ rPassword1 }
                                    // onChange={ setChange }
                                />
                            </div>

                            <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña" 
                                    name="rPassword2"
                                    //value={ rPassword2 }
                                />
                            </div>
                        </div>
                        
                        <h3>Perfil</h3>
                        <hr/>
                        <div className="perfil">
                            <div> <br/></div>
                             <div className="row mb-2">
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="status"
                                        // value={estado}
                                        onChange={setChange}
                                    >
                                        <option value= {status} > Status </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    
                                    <select
                                        type="text"
                                        name="llamadas"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {llamadas} > llamadas </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                            
                            <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="milpagos"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {milpagos} > Milpagos </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="cat"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {cat} > Cat </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="admin"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {admin} > Admin </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="supervisor"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {supervisor} > Supervisor </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                            
                            <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="wallet"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {wallet} > Wallet </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                                <div className="col-xs-3 col-sm-4 col-md-3 auto form-group">
                                    <select
                                        type="text"
                                        name="producto"
                                        // value={status}
                                        onChange={setChange}
                                    >
                                        <option value= {producto} > Producto </option>
                                        <option value= "1" >True</option>
                                        <option value= "0" >False</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div> <br/></div>
                        <div className="form-group ">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Actualizar" 
                            />
                        </div>

                        
                    </form>
                </div>

                
            </div>
        </div>
    )
}
