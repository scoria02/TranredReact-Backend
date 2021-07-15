import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { callsLogout } from './call';



export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                email: body.email,
                name: body.name,
                profile: body.profile
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name,
                profile: body.profile
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();
        //  console.log(body)
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                email: body.email,
                name: body.name,
                profile: body.profile
                
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}


const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( callsLogout() );
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })