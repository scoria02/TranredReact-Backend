import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingCalls } from '../../actions/call'
import { Link } from 'react-router-dom'
import { startChecking } from '../../actions/auth';

export const SubNavbar = () => {

  const {uid, name} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleCalls = () => {
    dispatch(startLoadingCalls(uid, name) )
    dispatch(startChecking())
  }

    return (
        <div className="tranred__subnavbar_container navbar navbar-expand-sm navbar-dark ">
           
           <Link 
                className="navbar-brand ml-4" 
                to="/"
            >
              <i className="fas fa-sign-out-alt"></i>
                <span className="tranred__span_subnavbar"> 1000Pagos </span> 
            </Link>
            
            <Link 
                className="navbar-brand ml-auto" 
                to="/callcenter"
                onClick= {handleCalls}
            >
              <i className="fas fa-sign-out-alt"></i>
                <span className="tranred__span_subnavbar"> Call Center </span> 
            </Link>

            <Link 
                className="navbar-brand ml-auto" 
                to="/"
            >
              <i className="fas fa-sign-out-alt"></i>
                <span className="tranred__span_subnavbar"> DigoPago </span> 
            </Link>

            <Link 
                className="navbar-brand ml-auto" 
                to="/"
            >
              <i className="fas fa-sign-out-alt"></i>
                <span className="tranred__span_subnavbar"> CAT </span> 
            </Link>
           
        </div>
    )
}
