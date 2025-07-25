import React from 'react';
import '../style/Hero.scss';
import Drone from '/icon/Drone.png'; 

function Hero() {
  return (
    <div className="hero-section">
      <div className='Hero-heading'>
        <h1>Vimaana</h1>
        <p>Aerospace <br/>Technologies</p>
      </div>
      <img 
        src={Drone} 
        alt="Hero Visual" 
        className="hero-img-top-right"
      />

      <div className="content cnt1">
        <div className="hc1">
        </div>
      </div>
    </div>
  );
}

export default Hero;
