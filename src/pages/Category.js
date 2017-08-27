import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DefaultAction from '../actions/DefaultAction';
import CategoryList from '../components/CategoryList';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
  }
  componentDidMount() {
    this.DefaultAction.fetchAllCats();
    if(this.props.match.params){
      const {cat} = this.props.match.params;
      console.log(this.props)
    }
  }
  
  render() {
    const {categories} = this.props.DefaultReducer;
    return (
      <div className='row page-container'>
        <div className='row'>
          <CategoryList
            categories={categories}
          />
        </div>
      </div>
    );
  }
}

function mapStateRoProps (state) {
  return {
    DefaultReducer: state.DefaultReducer
  }
}

export default connect(mapStateRoProps)(CategoryPage);
