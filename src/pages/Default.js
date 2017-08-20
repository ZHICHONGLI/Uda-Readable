import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultPage extends Component {
  render() {
    return (
      <div>
        default
        <Link to="/category">
          category
        </Link>
      </div>
    );
  }
}

export default DefaultPage;
