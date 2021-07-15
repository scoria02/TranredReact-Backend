import React from 'react'
import { useSelector } from 'react-redux';
import { CallEntryRight } from './CallEntryRight';

export const CallEntriesRight = () => {

    const { findCalls } = useSelector( state => state.call );
    
    return (
        <div className="call__entries">

            {   (findCalls) &&
                findCalls.map( findCalls => (
                    <CallEntryRight 
                        key={ findCalls.id }
                        { ...findCalls }
                    />
                ))
            }

            
        </div>
    )
}
