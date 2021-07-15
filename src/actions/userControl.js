import Swal from 'sweetalert2';
import {  fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';


export const startFindEmail = ( email ) => { 

    return async( dispatch ) => {
       try {
            const resp = await fetchConToken( `auth/user/${ email }` );
            const body = await resp.json();
            const {userControl} = body;
            
           if( body.ok ) {
                
                dispatch( setFind( userControl ) );

            } else {
                Swal.fire('Error', body.msg, 'error');
            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

const setFind = ( userControl ) => ({
    type: types.userControlFindLoaded,
    payload: userControl
});

export const activeUserControl = ( userControl ) => ({
    type: types.notesActive,
    payload: {
        ...userControl
    }
});
