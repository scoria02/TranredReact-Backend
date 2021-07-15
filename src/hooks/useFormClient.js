import { useState } from 'react';
const init = {
    name: 'nommmd',
    phone: '',
    locations: ''
}

export const useFormClient = ( initialState = init ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}