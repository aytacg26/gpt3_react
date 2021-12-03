import React from 'react';

const NavLink = ({ to, text }) => {
  return (
    <p>
      <a href={`#${to}`}>{text}</a>
    </p>
  );
};

export default NavLink;
