import React from 'react';
import {NavLink} from "react-router-dom";

const GuestNavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink  to={'/'}>Home</NavLink> </li>
                <li><NavLink  to={'/about'}>About</NavLink> </li>
                <li><NavLink  to={'/contact'}>Contact</NavLink> </li>
                <li><NavLink  to={'/post'}>Post</NavLink> </li>
            </ul>
        </div>
    );
};

export default GuestNavBar;