import React from 'react';
import './Footer.css';
import playStore from './images/play-store.png';
import appStore from './images/app-store.png';

const Footer = () => {
    return (
        <footer>
            <div id="app">
                <h3>Download our App on your phone</h3>
                <div>
                    <img src={playStore} alt="" />
                    <img src={appStore} alt="" />
                </div>
            </div>
            <div id="credits">
                <div>Cricket API @
                <a href="https://www.cricapi.com/" title="Flaticon" target="_blank"> www.cricapi.com</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;