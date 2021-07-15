import React from 'react';
// import { useSelector } from 'react-redux';
// import { useForm } from '../../hooks/useForm';
// const tipo = localStorage.getItem('tipo');


export const CallFormScreen = () => {

    // const { activeCall:call } = useSelector( state => state.calls );
    // const [ formValues, handleInputChange] = useForm( call );
    //  const [tipo, settipo] = useState(initialState="Seleccione tipo")   
    
     return (
                <div className="from_container">
                    <div className="abs-center">
                        <form action="#" className="border p-3 form">
                            <h1>Call Center</h1>
                            <div className="form-group ">
                                <input 
                                    type="text"
                                    placeholder="tipo_solicitud"
                                    className="input form2"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                               <input 
                                    type="text"
                                    placeholder="num_rif_ci"
                                    className="input form2 ml-1"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                            
                            <select 
                                id="Incidencia"
                                className="input form3"
                                autoComplete="off"
                                name="title"
                            >
                            <option value="volvo">Primera1</option>
                            <option value="saab">Primera2</option>
                            <option value="vw">Primera3</option>
                            <option value="audi">Primera4</option>
                            </select>
                            
                                <input 
                                    type="text"
                                    placeholder="nombre_cliente"
                                    className="input form2"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                           
                                <textarea 
                                    type="text"
                                    placeholder="direccion"
                                    className="input form3"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                            </div>
                            {/* <div className="form-group ">
                                <input 
                                    type="text"
                                    placeholder="id_user"
                                    className="input form2"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                            </div> */}
                            {/* <div className="form-group ">
                                <input 
                                    type="text"
                                    placeholder="nombre_user"
                                    className="input form2"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                            </div> */}
                            {/* <div className="form-group ">
                                <input 
                                    type="text"
                                    placeholder="estado"
                                    className="input form2"
                                    autoComplete="off"
                                    name="title"
                                    // value={ tipo }
                                    // onChange={ handleInputChange }
                                />
                            </div> */}
                            <button type="submit" className="btn btn-primary">Login</button>
                         </form>
                    </div>
                </div>
        // <div className="form_container">
        //     <div className="form_group_inputs">
        //         <h1>Call Center</h1>
               
        //             <input 
        //             type="text"
        //             placeholder="Solicitud"
        //             className="form_imputs"
        //             autoComplete="off"
        //             name="title"
        //             // value={ tipo_solicitud }
        //             // onChange={ handleInputChange }
        //         />
        //         <div>
        //             <select 
        //                 id="Incidencia"
        //                 className="calls__title-input"
        //                 autoComplete="off"
        //                 name="title"
        //             >
        //             <option value="volvo">Primera1</option>
        //             <option value="saab">Primera2</option>
        //             <option value="vw">Primera3</option>
        //             <option value="audi">Primera4</option>
        //             </select>
        //         </div>
        //     </div>


        // </div>

    )
}
