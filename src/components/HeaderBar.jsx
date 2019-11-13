import React from 'react';
import './header-bar.css';


const HeaderBar = (props) => {
    return (
        
        <header className="main-header">
            <div className="logo-main">
                <img src={props.logo} className="logo"></img>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <a href="props.link1">{props.menu1}</a>
                    </li>
                    <li>
                        <a href="props.link2">{props.menu2}</a>
                    </li>
                    <li>
                        <a href="props.link3">{props.menu3}</a>
                    </li>
                    <li>
                        <a href="props.link4">{props.menu4}</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default HeaderBar;