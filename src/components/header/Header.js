import React from 'react';
import './Header.css'
import logo from '../../images/push.jpg'

const Header = () => {
    return (
        <nav className='nav'>
            <div className="nav-logo">
                <img className="logo" src={logo} alt="" />
                {/* <img src="" alt="" /> */}
                <h1>Weight Lifting</h1>
            </div>
        </nav>
    );
};

export default Header;