import React, { Fragment } from 'react';
import NavLink from '../NavLink/NavLink';

const navLinks = [
  { id: 'link-00001', to: 'home', text: 'home' },
  { id: 'link-00002', to: 'wgpt3', text: 'What is GPT3' },
  { id: 'link-00003', to: 'possibility', text: 'Open AI' },
  { id: 'link-00004', to: 'features', text: 'Case Studies' },
  { id: 'link-00005', to: 'blog', text: 'Library' },
];

const NavLinks = () => {
  return (
    <Fragment>
      {navLinks.map((link) => (
        <NavLink {...link} key={link.id} />
      ))}
    </Fragment>
  );
};

export default NavLinks;
