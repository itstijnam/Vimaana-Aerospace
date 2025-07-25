import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import LOGO from '/icon/Logo.png'

function Header() {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className="header_container">

      <div className='header__logo'>
        <img src={LOGO} alt="Wolf and Widgets" />
      </div>
       <ul className='navBar'>
        <li onClick={ ()=>navigate('')} >Home</li>
        <li onClick={ ()=>navigate('about')} >About Us</li>
        <li onClick={()=>navigate('pricing')} >Pricing</li>
        {/* <li><a href="#">Pricing</a></li> */}
        {/* <li><a href="#">Contact</a></li> */}
      </ul>
      <a href="#" className='header__cta'>Let's Talk!</a>
      </div>
    </div>
  )
}

export default Header