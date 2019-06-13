import React from 'react';

// Navbar CSS
import './Navbar.css';

// Importing Components
import Button from 'components/dumb/Button';

function Navbar(props){
    return(
        <div className="navbar">
            <div className="sign-in">
                <Button css="button transparent" text="Sign in"></Button>
            </div>
        </div>
    )
}

export default Navbar;