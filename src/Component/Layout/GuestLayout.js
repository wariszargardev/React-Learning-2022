import React from 'react';
import GuestNavBar from "../Navigation/GuestNavBar";

const GuestLayout = ({children}) => {
    return (
        <div>
            <GuestNavBar />
            {children}
        </div>
    );
};

export default GuestLayout;