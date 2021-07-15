import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { TranredScreen } from '../components/tranred/TranredScreen';
// import Dashboard from '../components/callcenter/dashboard/Dashboard';
import { UserControlerScreen } from '../components/usercontroler/UserControlerScreen';
import { CallsScreen } from '../components/calls/CallsScreen';
import { PuntoConsultaScreen } from '../components/puntoConsulta/PuntoConsultaScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, profile } = useSelector( state => state.auth);

    //perfiles de Navbar
    
    const calls = profile.find( status => status.profile === 'calls' );
    // const calendar = profile.find( status => status.profile === 'calendar' );
    // const wallet = profile.find( status => status.profile === 'wallet' );
    
    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        
        <Router>
            <div>
               
                <Switch>
                   
                    <PublicRoute 
                        exact 
                        path="/auth/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />

                    
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ TranredScreen } 
                        isAuthenticated={ !!uid }
                                
                    />
                    

                    <PrivateRoute 
                        exact 
                        path="/calendar/" 
                        component={ CalendarScreen } 
                        isAuthenticated={ !!uid }
                    />

                    {
                        (calls)&&
                            <PrivateRoute 
                                exact 
                                path="/callcenter/" 
                                component={ CallsScreen } 
                                isAuthenticated={!!uid}
                                
                            />
                            
                    }

                    <PrivateRoute 
                        exact 
                        path="/puntoConsulta/" 
                        component={ PuntoConsultaScreen } 
                        isAuthenticated={ !!uid }
                    />

                    {/* <PrivateRoute 
                        exact 
                        path="/calldashboard/" 
                        component={ Dashboard } 
                        isAuthenticated={ !!uid }
                    /> */}

                    <PrivateRoute 
                        exact 
                        path="/controler/" 
                        component={ UserControlerScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
