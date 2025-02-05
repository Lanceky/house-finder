import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { logo } from '../../assets';
import './navbar.css'
const Menu = () => {
  return (
    <>

      <p><a href="#">Home</a></p>
      <p><a href="#About">About us</a></p>
      <p><a href="#contact">Contact Us</a></p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    /* BEM -> Block element modifier class naming convention used */
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
         <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;