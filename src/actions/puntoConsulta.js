// import Swal from "sweetalert2";
import {  fetchConTokenSql } from "../helpers/fetch";
import { types } from '../types/types';

export const startFindPlan = ( Terminal ) => { 

    return async( dispatch ) => {
       try {
            const resp = await fetchConTokenSql(`puntoConsulta/plan/${ Terminal }`);
            const body = await resp.json();
            const {plan} = body;

            
           if( body.ok ) {
               
                dispatch( setFindPlan( plan ) );

            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

export const startFindTerm = ( comerRif ) => { 

    return async( dispatch ) => {
       try {
            const resp = await fetchConTokenSql(`puntoConsulta/${ comerRif }`);
            const body = await resp.json();
            const {term} = body;

            
           if( body.ok ) {
               
                dispatch( setFindTerm( term ) );

            }

           
       } catch (error) {
           console.log(error)
       }

    }
}

const setFindPlan = ( plan ) => ({
    type: types.puntoConsultaPlanLoaded,
    payload: plan
});

const setFindTerm = ( term ) => ({
    type: types.puntoConsultaTermLoaded,
    payload: term
});