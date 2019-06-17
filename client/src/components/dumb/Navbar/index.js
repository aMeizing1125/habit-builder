import React from 'react';

// Navbar CSS
import './Navbar.css';

function Navbar(props){
    return(
        <div className="navbar">
            <div className="user">
                <select className="user-options">
                    <option value="" selected disabled hidden>{props.username}</option>
                    <option>Sign Out</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar;