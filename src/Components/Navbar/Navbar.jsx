import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {

    const [icon, setIcon] = useState(false)

  return (
    <nav className='navigation-bar'>
        <img src={logo} alt="logo" />
        <div className='menu-icons' onClick={()=>setIcon(icon=>!icon)}>
            <i className={`fa-solid ${icon? "fa-times":"fa-bars"}`} ></i>
        </div>
        <ul className={icon? "nav-menu":"nav-menu close"}>
            <li><Link to={'/'} className='link-tag'><i class="fa-solid fa-house-user"></i> Home</Link>  </li>
            <li><Link to={'/About'} className='link-tag'><i class="fa-solid fa-circle-info"></i> About</Link>   </li>
            <li><Link to={'/Service'} className='link-tag'><i class="fa-solid fa-briefcase"></i> Service</Link></li>
            <li><Link to={'/Contact'} className='link-tag'><i class="fa-solid fa-address-book"></i> Contact</Link></li>
            <button className='sign-up'>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar