import React from 'react'
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer'>
      <div data-aos="fade-up" data-aos-duration="2000" className="secContainer container grid">
        <div className='logoDiv'>
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex'> <SiYourtraveldottv className='icon'/>ATAT</h1>
            </a>
          </div>
        <div className="socials flex">
          <ImFacebook className='icon'/>
          <BsTwitter className='icon' />
          <AiFillInstagram className='icon'/>
        </div>
        </div>

        <div className="footerLinks">
        <span className="linkTitle">
          Helpful Links
        </span>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
      </div>

      <div className="footerLinks">
        <span className="linkTitle">
          Navigation Links
        </span>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </div>

      <div className="footerLinks">
        <span className="linkTitle">
          Contact Us
        </span>
        <span className='phone'>+444 565 6655</span>
        <span className='email'>kobytech@gmail.com</span>
        
      </div>

      </div>
    </div>
  )
}

export default Footer`4`