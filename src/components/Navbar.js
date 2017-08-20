import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    name: "Default",
    url: "/default"
  },
  {
    name: "Category",
    url: "/category"
  }
];

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <span>Readable App</span>
        {list.map(item => (
          <span key={item.name} className='navitem'> | <Link className='navitem' to={item.url}>{item.name}</Link></span>
        ))}
      </nav>
      
    </div>
  );
};

export default Navbar;