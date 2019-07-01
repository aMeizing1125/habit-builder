import React from 'react';

// Importing component CSS
import './Nav.css';

// SVG Manipulation Tool
import { SvgLoader, SvgProxy } from 'react-svgmt';

// Importing SVG's
import logo from 'img/logo.svg';
import tow from 'img/tow.svg';

function Nav(props){
    return(
        <div className="nav">
            <div className="home-nav-left">
                <div className="home-logo">
                <SvgLoader path={logo}>
                    <SvgProxy selector=".logo-top" fill="#abcbd1" />
                    <SvgProxy selector=".logo-main" fill="#96b1c9" />
                    <SvgProxy selector=".logo-accent" fill="#cfcfcf" />
                </SvgLoader>
                </div>
                <div className="home-name">Crushin' It!</div>
            </div>
            <div className="home-nav-right">
                <div className="nav-home nav-item">Home</div>
                <div className="nav-blog nav-item">Blog</div>
                <div className="nav-faq nav-item">FAQ</div>
                <div 
                    className="nav-signin nav-item"
                    // onClick={this.handleLogin}
                >Sign In</div>
            </div>
            
            {/* Tow Svg */}
            <SvgLoader class="tow" path={tow}>
                <SvgProxy selector=".tow-main" fill="rgb(255, 92, 80)" ></SvgProxy>
            </SvgLoader>
        </div>
    )
}

export default Nav;