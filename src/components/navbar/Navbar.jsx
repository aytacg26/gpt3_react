import React, { useState } from 'react';
import NavLinks from './NavLinks/NavLinks';
import './Navbar.css';
import MobileMenu from './MobileMenu/MobileMenu';
import NavLogo from './NavLogo/NavLogo';

//BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <NavLogo />
        <div className='gpt3__navbar-links_container'>
          <NavLinks />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default Navbar;
