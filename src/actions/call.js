import Swal from 'sweetalert2';
import {  fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiOpenModal } from './ui';

export const startLoadingCalls = ( id_user ) => { 

    return async( dispatch ) => {
        
       try {
            const resp = await fetchConToken( `calls/user/${id_user}` );
            const body = await resp.json();
            const {calls} = body;
            
            // console.log(calls)
           if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                
                dispatch( setCalls( calls ) );

            } else {
                Swal.fire('Error', body.msg, 'error');
            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

export const startFindClient = ( ci_rif ) => { 

    return async( dispatch ) => {
       try {
            const resp = await fetchConToken( `calls/${ ci_rif }` );
            const body = await resp.json();
            const {client} = body;

            const resp2 = await fetchConToken( `calls/req` );
            const body2 = await resp2.json();
            const {typesReq} = body2;
            
           if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                
                dispatch( setFindCalls( client ) );
                dispatch( setFindTypesReqCalls( typesReq ) );

            } else {
                // Swal.fire('Error', body.msg, 'error');
                Swal
                .fire({
                    title: body.msg,
                    text: "Agregar?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: "Sí, agrega",
                    cancelButtonText: "Cancelar",
                })
                .then(resultado => {
                    if (resultado.value) {
                        // Hicieron click en "Sí"
                        console.log("*se agregara la venta*");
                        dispatch( uiOpenModal() );
                    } else {
                        // Dijeron que no
                        console.log("*NO se elimina la venta*");
                    }
                });
            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

export const startFindDesc = ( request_id ) => { 

    return async( dispatch ) => {
       try {
            const resp = await fetchConToken( `calls/req/${ request_id }` );
            const body = await resp.json();
            const {descReq} = body;

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                
                dispatch( setFindDesReqCalls( descReq ) );

            } else {
                Swal.fire('Error', body.msg, 'error');
            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

const setFindCalls = ( client ) => ({
    type: types.callsFindLoaded,
    payload: client
});
//tipos de req
const setFindTypesReqCalls = ( typesReq ) => ({
    type: types.callsFindTypesReqLoaded,
    payload: typesReq
});
//description
const setFindDesReqCalls = ( descReq ) => ({
    type: types.callsFindDesReqLoaded,
    payload: descReq
});

const setCalls = ( calls ) => ({
    type: types.callsLoaded,
    payload: calls
});


export const callsLogout = ( ) => ({ 
    type: types.callsLogout 
});



export const startNewCall = ( call ) => {
    return async( dispatch, getState ) => {
        // console.log(call)
        // const { uid, name } = getState().auth;
        // const newNote = {
        //     tipo_solicitud: '',
        //     tipo_llamada: '',
        //     num_rif_ci: '',
        //     nombre_cliente: '',
        //     direccion: '',
        //     id_user: '',
        //     nombre_user: '',
        //     estado: 'Nueva'
        // }
        // try {
        //     const resp = await fetchConToken('calls', call, 'POST');
        //     const body = await resp.json();
        //     // const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
        //     if ( body.ok ) {
        //         call.id = body.call.uid;
        //         call.user = {
        //             _id: uid,
        //             name: name
        //         }
        //         console.log( call );
        //         dispatch( callAddNew( call ) );
        //     }
            
                
        // } catch (error) {
        //     console.log(error);
        }
    
    
        // }
    }

// const callAddNew = (call) => ({ 
//     type: types.callAddNew,
//     payload: call
// });

export const callSetActive = (tipo) => ({
    type: types.callSetActive,
    payload: tipo
})