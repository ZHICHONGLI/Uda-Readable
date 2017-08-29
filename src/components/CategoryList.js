import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class CategoryList extends Component {
  render() {
    const {categories, match} = this.props;
    let routeCat = '';
    if(match.params.cat) {
      routeCat = match.params.cat
    }
    return (
      <div className='row cat-container'>
        <div className='col-sm-3'>Categories:</div>
        {
          categories.map((cat, i) => (
            <div key={i} className='col-sm-3'>
              {
                cat.name == routeCat ?
                  <span>{cat.name}</span> :
                  <Link to={`/category/${cat.path}`}><span>{cat.name}</span></Link>
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default withRouter(connect()(CategoryList));