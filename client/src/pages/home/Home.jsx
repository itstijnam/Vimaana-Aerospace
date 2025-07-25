import React from 'react'

import Team from '../about/sections/Team'



import './style/Home.scss';
import Hero from './sections/Hero'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
    <div className='home'>

      <div className="home_container">
       

        <div className="home_sections">

          <Hero />

          {/* <PriceQuote /> */}

          {/* <Service /> */}


          {/* <Projects /> */}

          {/* <Team /> */}

          {/* <InstaProfile/>

          <Thought /> */}





          <Footer/>
        </div>

      </div>


    </div>
  )
}

export default Home