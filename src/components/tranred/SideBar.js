import React from 'react';
// import { useDispatch } from 'react-redux';




export const SideBar = () => {
    
    // const dispatch = useDispatch()

    
    return (
        <aside className="tranred__sidebar">
            
            <div className="tranred__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    {/* <span> { name }</span> */}
                </h3>

                <div 
                    className="btn"
                    // onClick={ hanleLogout }
                >
                    Monto : 
                </div>
            </div>

            <div 
                className="tranred__new-entry"
                //  onClick={ hanledBan }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    Obten banco
                </p>
            </div>

               

        </aside>
    )
}
