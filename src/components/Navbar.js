import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const list = [
  {
    name: 'Default',
    url: '/default'
  },
  {
    name: 'Category',
    url: '/category'
  }
];


class Navbar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <span>Readable App</span>
          {list.map(item => {
            const match = this.props.location.pathname === item.url;
            console.log(match);
            return (
              <span key={item.name} className='navitem'> | <Link className={match?'activrbar':'navitem'} to={item.url}>{item.name}</Link></span>
            )}
          )}
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
