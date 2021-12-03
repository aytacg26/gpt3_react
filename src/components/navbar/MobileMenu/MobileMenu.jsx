import React, { Fragment } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import NavLinks from '../NavLinks/NavLinks';

const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  let content;

  if (!toggleMenu) {
    content = (
      <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
    );
  } else {
    content = (
      <Fragment>
        <RiCloseLine
          color='#fff'
          size={27}
          onClick={() => setToggleMenu(false)}
        />
        <div className='gpt3__navbar-menu_container scale-up-center'>
          <div className='gpt3__navbar-menu_container-links'>
            <NavLinks />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return <div className='gpt3__navbar-menu'>{content}</div>;
};

export default MobileMenu;
