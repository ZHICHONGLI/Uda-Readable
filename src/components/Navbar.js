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
    const style = {marginBottom: '20px'};
    return (
      <div style={style} className='row'>
        <nav className='navbar'>
          <Link to='/'><span className='header-icon'>Readable App</span></Link>
          {list.map(item => {
            const match = this.props.location.pathname === item.url;
            return (
              <span key={item.name} className='navitem'> |
                {
                  match ?
                    <span className='activrbar'>{item.name}</span> :
                    <Link className='navitem' to={item.url}>{item.name}</Link>
                }
              </span>
            )}
          )}
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
