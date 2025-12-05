import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <img src={logo} alt="logo" />
                <p>Choose Your Favorite Destination</p>
            </div>
            <div className='socials'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-instagram" ></i>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Community</h4>
                <p>GitHub</p>
                <p>Issues</p>
                <p>Project</p>
                <p>Twitter</p>
            </div>
            <div>
                <h4>Help</h4>
                <p>Support</p>
                <p>Troubleshooting</p>
                <p>Contact</p>
            </div>
            <div>
                <h4>Others</h4>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>License</p>
            </div>
        </div>
    </div>
  )
}

export default Footer