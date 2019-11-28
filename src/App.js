import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {BrowseRouter, Router, link} from 'react-router-dom';


// IMAGES

import logo from './components/images/logo.png';

import serviceIcon1 from './components/images/icon-1.png';
import serviceIcon2 from './components/images/icon-2.png';
import serviceIcon3 from './components/images/icon-3.png';
import image1 from './components/images/img-1.jpg';
import image2 from './components/images/img-2.jpg';
import image3 from './components/images/img-3.jpg';



// COMPONENTS

import MatchScore from "./components/MatchScore.jsx";
import HeaderBar from './components/HeaderBar.jsx';
import ImagesSlider from './components/ImagesSlider.jsx';
import SiteInfo from './components/SiteInfo.jsx';
import Service from './components/Service.jsx';
import Footer from './components/Footer.jsx';

import LiveScore from './components/Router/LiveScore.jsx';



function App() {


  

  return (
    <div className="App">

      { 
      <HeaderBar
        logo={logo}
        link1="#"
        menu1="HOME"
        link2="#"
        menu2="LIVE SCORE"
        link3="#"
        menu3="LIVE MATCHES"
        link4="#"
        menu4="NEWS"
      />

      // <SliderImage />
      
      /*
      <SiteInfo 
        heading="YOU CAN CATCH LIVE MATCHES, CRICKET NEWS AND YOUR FAVOURITE CRICKETERS HERE!"
        para="For more Cricket updates stay connected!"
      />


      <div className="services">

        <Service iconImage={serviceIcon1} heading="Live Score" image={image1} para="Stay Connected and Enjoy the live Cricket on your fingertips!"/>
        <Service iconImage={serviceIcon2} heading="Cricket News" image={image2} para="Press the bell icon and get latest updates and news on Cricket."/>
        <Service iconImage={serviceIcon3} heading="Your favourite player" image={image3} para="Get the information and bio of your favourite Players."/>
      
      </div>


      <Footer /> */}


      <LiveScore />


    </div>
  );


}

export default App;
