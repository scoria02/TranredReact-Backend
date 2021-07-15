import React from 'react';
import { useSelector } from 'react-redux';
import { Entry } from './Entry';

import '../assets/css/entries.css';

export const Entries = () => {

    const {userControlFind} = useSelector(state => state.userControl)
    // console.log(authFind)
    return (
        <div className="Entries__entries">
           
            {   (userControlFind) &&
                
                    <Entry 
                        key={ userControlFind.id }
                        { ...userControlFind }
                    />
                
            }
        </div>
    )
}
