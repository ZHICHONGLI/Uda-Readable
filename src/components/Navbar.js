import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    name: "Default",
    url: "/"
  },
  {
    name: "Category",
    url: "/category"
  },
  {
    name: "Post Detail",
    url: "/postdetail"
  }
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span>Readable App</span>
      {list.map(item => (
        <span key={item.name} className='navitem'> | <Link className='navitem' to={item.url}>{item.name}</Link></span>
      ))}
    </nav>
  );
};

export default Navbar;