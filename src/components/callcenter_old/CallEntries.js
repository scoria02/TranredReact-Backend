import React from 'react'
import { useSelector } from 'react-redux';
import { CallEntryLeft } from './CallEntryLeft';

export const CallEntries = () => {

    const { calls } = useSelector( state => state.call );
    
    return (
        <div className="call__entries">

            {         
                calls.map( calls => (
                    <CallEntryLeft 
                        key={ calls.id }
                        { ...calls }
                    />
                ))
            }
            

            
        </div>
    )
}
