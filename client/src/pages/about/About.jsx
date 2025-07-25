import React from 'react';
import './style/About.scss';
import phoneFrame from './assets/Phone.png';           // Phone outer frame
import appScreenshot from './assets/home_image.png';  // Image to show inside the phone
import Trust from './sections/Trust';
import Team from './sections/Team';
import Footer from '../../components/footer/Footer';

function About() {
  return (
    <div className='about'>
      <div className="about_container">
        {/* VIDEO SECTION */}
        <div className="video_section">
          <video src="/video/backgvideo1.mp4" autoPlay muted loop playsInline></video>
          <div className="background_overlay"></div>
        </div>

        <div className="about_sections">
          {/* HERO SECTION */}
          <div className="about_hero_container">
            <div className="hrBox1">
              <div className="text">
                <h1>Your Digital Vision, Our Creative <span>Execution</span> </h1>
                <p>
                  We bring your digital dreams to life with stunning, responsive websites. Whether you need a personal portfolio or a business website, we deliver intuitive, clean, and engaging solutions that stand out.
                </p>
              </div>
              <button>Let's build</button>
            </div>

            <div className="hrBox2">
              <div className="phone-container">
                <img src={phoneFrame} alt="Phone Frame" className="phone-frame" />
                <img src={appScreenshot} alt="App Screenshot" className="inside-image" />
              </div>
            </div>
          </div>

          {/* OTHER SECTIONS */}
          <Trust />
          <Team />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
