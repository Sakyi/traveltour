import React, { useState } from 'react'
import Logo from  '../../assets/logo.jpg'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.css'

const Navbar = () => {

  // code to toggle show navbar

  const [active, setActive] = useState('navBar')
  const showNav = () => {
      setActive('navBar activeNavbar')
  }

  //code to remove navbar
  const removeNavbar = () => {
    setActive('navBar')
  }

  //code to add background color to the header...
  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        {/* logo */}
        <div className='logoDiv'>
            <a href="#" className='logo'>
              <h1 className='flex'><img  src={Logo} alt="logo" style={{width:'55px', height:'55px',verticalAlign:"middle", marginRight:'0.5em'}}/>Alpha Tour</h1>
            </a>
        </div>
        {/* navbar */}
        <nav className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
                <a href="#" className='navLink'>Home</a>
            </li>
            <li className='navItem'>
                <a href="#" className='navLink'>Products</a>
            </li>
            <li className='navItem'>
                <a href="#" className='navLink'>Resources</a>
            </li>
            <li className='navItem'>
                <a href="#" className='navLink'>Contact</a>
            </li>
            <li className='navItem'>
                <a href="#" className='navLink'>Blog</a>
            </li>
            <div className='headerBtns flex'>
              <button className='btn loginBtn'>
                  <a href="#">Login</a>
              </button>
              <button className='btn'>
                  <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon'/>
          </div>
        </nav>

        <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  )
}

export default Navbar