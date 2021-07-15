import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch()

    const {  name, profile } = useSelector( state => state.auth );

    //perfiles de Navbar
    const calls = profile.find( status => status.profile === 'calls' );
    const calendar = profile.find( status => status.profile === 'calendar' );
    const wallet = profile.find( status => status.profile === 'wallet' );

    
    const handleLogout = () => {
        dispatch( startLogout() );
    }

    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Tranred
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/we"
                    >
                         Nosotros
                    </NavLink>
                         
                {
                    ( !!calendar ) 
                        &&( 
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/calendar"
                        
                    >
                        Calendar
                    </NavLink>

                         ) }


                    { ( !!calls ) 
                        &&( 
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/callcenter"
                            >
                                CallCenter
                            </NavLink>
                         )
                    }

                    { ( !!wallet ) 
                        &&( <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/wallet"
                        >
                            Wallet
                        </NavLink> )
                    }
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/puntoConsulta"
                    >
                        PuntoConsulta
                    </NavLink>
                    
                </div>
            </div>

        
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    {name}
                </Link>
                <button 
                    className="btn btn-outline-danger"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt"></i>
                    
                    <span> Logout</span>
                </button>
                </ul>
            </div>
        </nav>
    )
}