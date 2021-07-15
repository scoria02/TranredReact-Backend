import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useSelector } from 'react-redux';
import es from 'date-fns/locale/es';


import '../assets/css/estadoCuenta.css';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es);


export const EstadoCuenta = () => {
    
    // const dispatch = useDispatch()
    const {modalOpen} = useSelector(state => state.ui);
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate)

    return (
        <div className={(!modalOpen)?"main":"main_container"}>
            <div className="main_container">
                <h1>Consulta Pagos de Clientes</h1>
                <div className="row mb-3">
                    <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                   
                    <DatePicker
                        locale = 'es'
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showYearPicker
                        dateFormat="yyyy"
                        yearItemNumber={4}
                    />
                        
                         
                        <button
                            className="input_search_button2"
                            // onClick={ handleIr }
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-6 auto form-group">
                        {/* <DatePicker
                            locale = "es"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="MMM"
                            showMonthYearPicker
                            showFullMonthYearPicker
                        /> */}
                        <select
                                    name="mes"
                                    className="select_search"
                                    // onClick={handleTypeChange}
                                    // onChange={handleTypeChange}
                                    
                                >
                                <option value="00">Selecciona una Opcion</option>
                                <option value="01">Enero</option>
                                <option value="02">Febrero</option>
                                <option value="03">Marzo</option>
                                <option value="04">Abril</option>
                                <option value="05">Mayo</option>
                                <option value="06">Junio</option>
                                <option value="07">Julio</option>
                                <option value="08">Agosto</option>
                                <option value="09">Septiembre</option>
                                <option value="10">Octubre</option>
                                <option value="11">Noviembre</option>
                                <option value="12">Diciembre</option>
                                
                            
                        </select>
                    </div>
                </div>
                
            </div>
        </div>    
    )
}
