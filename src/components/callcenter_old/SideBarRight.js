import React from 'react'
import { useDispatch} from 'react-redux'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import { startFind } from '../../actions/call'
import { useForm } from '../../hooks/useForm'
import { CallEntriesRight } from './CallEntriesRight'
// import { CalendarModal } from '../calendar/CalendarModal';
import { AddModal } from '../ui/AddModal';
import { ChatModal } from '../usercontroler/components/ChatModal';
// import { Chat } from '../usercontroler/components/Chat';

export const SideBarRight = ({nombre_user, updatedAt }) => {

    const dispatch = useDispatch();
    // const { activeCall } = useSelector(state => state.call)
    // const [values, handleActive] = useForm(activeCall)
    //const {nombre_user, updatedAt} = values;
    // console.log(nombre_user)
    const location =  useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
       search: q
    });
    const {search} = formValues;

    
    
    
    const handleFind = (e) => {
        e.preventDefault();
        dispatch( startFind(search) )
        
    }
    return (
        
            <aside className="call__sidebarRight">
                
                <div className="call__sidebarRight-navbar">
                   
                <form onSubmit={handleFind}> 
                    
                    <input 
                    type="text" 
                    className="input" 
                    autoComplete="off"
                    placeholder="Cedula o Rif" 
                    name = "search"
                    onChange = {handleInputChange} 
                    value = {search}
                    />
                    <button 
                        type="submit"
                        className="btn"
                        >
                        Buscar ...
                    </button>  
                    
                </form>
                </div>
                   <div>
                        <h3> Informacion de Cliente</h3>
                
                        <div 
                        type="text"
                        placeholder=""
                        className="input2 ml-3"
                        //autoComplete="off"
                        name = "nombre_user"
                        //value = {nombre_user}
                        // onChange={ handleActive }
                        />
                       
                       <div 
                        type="text"
                        placeholder=""
                        className="input2 ml-3"
                        autoComplete="off"
                        //value = {updatedAt}
                        name = "updatedAt"
                       // onChange={ handleActive }
                        />
                       
                    </div>
                    <div className= "call__sidebarRight-navbar mt-3">
                    <h3> Solicitudes Hechas</h3>
                    </div>
                   
                <CallEntriesRight />

                {/* <AddNewFab /> */}
                <AddModal />
                <ChatModal />
                {/* <CalendarModal /> */}
                {/* <Chat /> */}

            </aside>
    )
}
