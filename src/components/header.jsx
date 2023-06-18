import React from 'react';
import '../assets/style/header.scss';
import logo from '../assets/images/logo/logo.png';

function Header() {
    return (
        <header className="header">
            <img className="header_logo" src={logo} alt=""/>
            <h1 className='header_title'>Gyumri Forum</h1>
            <nav className="header_nav">
                <div className='header_nav_block'>
                    <div className="dropdown">
                        <button className="dropbtn">Lang</button>
                        <div className="dropdown-content">
                            <div className='div'>
                                <p className='language'>ENG</p>
                                <p className='language'>RUS</p>
                                <p className='language'>ARM</p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Contact</button>
                        <div className="dropdown-content">
                            <div className='div'>
                                <p>TikTok</p>
                                <p>@gmail</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;