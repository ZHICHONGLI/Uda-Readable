import React from 'react';
import {Link} from 'react-router-dom';

const CategoryList = ({categories}) => {
  return (
    <div className='row cat-container'>
      <div className='col-sm-3'>Categories:</div>
      {
        categories.map((cat, i) => (
          <div key={i} className='col-sm-3'>
            <Link to={`/category/${cat.path}`}><span>{cat.name}</span></Link>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryList;