import React from 'react';
import { NavLink } from 'react-router-dom';
const ActiveLink =({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive, isPending})=>
            isActive ? "text-purple-500 p-2 rounded-lg" : isPending ? "pending" : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;