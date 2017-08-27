import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DefaultAction from '../actions/DefaultAction';
import PostsList from '../components/PostsList';
import CategoryList from '../components/CategoryList';

class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
  }

  componentWillMount() {
    document.title = 'Default';
  }
  
  componentDidMount() {
    this.DefaultAction.fetchAllCats();
    this.DefaultAction.fetchAllPosts();
  }
  
  handleSortPosts(event) {
    this.DefaultAction.setSortType(event.target.value);
  }

  render() {
    const {categories, allPosts, activeSortType} = this.props.DefaultReducer;
    return (
      <div className='row page-container'>
        <div className='row'>
          <CategoryList
            categories={categories}
          />
          <button className='btn btn-default' onClick={()=>console.log(this.props.DefaultReducer)}>test</button>
        </div>
        <div className='row  default-content-container'>
          <div className='row'>
            <span className='col-sm-2'>All Posts</span>
            <span className='col-sm-3 col-sm-offset-7'>Sort By: 
              <select
                value={activeSortType}
                onChange={(event)=>this.handleSortPosts(event)}
              >
                <option value='voteHigh'>Votes from High to Low</option>
                <option value='voteLow'>Votes from Low to High</option>
                <option value='timeNew'>Post from New to Old</option>
                <option value='timeOld'>Post from Old to New</option>
              </select>
            </span>
          </div>
          <div className='row'>
            <PostsList
              posts={allPosts}
            />
          </div>
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

// const mapDispatchToProps = dispatch => ({
//   DefaultAction: bindActionCreators(DefaultAction, dispatch)
// });

export default connect(mapStateRoProps)(DefaultPage);
