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

  sortPosts (e, allPosts) {
    if(e === 'voteHigh'){
      allPosts.sort((a, b) => {
        if (a.voteScore > b.voteScore) {
          return -1
        } else {
          return 1
        }
      })
    } else if (e === 'voteLow'){
      allPosts.sort((a, b) => {
        if (a.voteScore < b.voteScore) {
          return -1
        } else {
          return 1
        }
      })
    } else if (e === 'timeNew'){
      allPosts.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1
        } else {
          return 1
        }
      })
    } else if (e === 'timeOld'){
      allPosts.sort((a, b) => {
        if (a.timestamp < b.timestamp) {
          return -1
        } else {
          return 1
        }
      })
    }
  }

  render() {
    const {categories, allPosts, activeSortType} = this.props.DefaultReducer;
    const handleSortPosts = (e) => {
      this.DefaultAction.setSortType(e);
      this.sortPosts(e, allPosts);
    }
    return (
      <div className='row page-container'>
        <div className='row'>
          <CategoryList
            categories={categories}
          />
        </div>
        <div className='row  default-content-container'>
          <div className='row'>
            <span className='col-sm-2'>All Posts</span>
            <span className='col-sm-2 col-sm-offset-7'>Sort By: 
              <select
                value={activeSortType}
                onChange={(event)=>handleSortPosts(event.target.value)}
              >
                <option value='voteHigh'>Votes from High to Low</option>
                <option value='voteLow'>Votes from Low to High</option>
                <option value='timeNew'>Post from New to Old</option>
                <option value='timeOld'>Post from Old to New</option>
              </select>
            </span>
            <span className='btn btn-primary' onClick={()=> this.props.history.push('/newpost')}>Post</span>
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

function mapStateToProps ({DefaultReducer}) {
  return {
    DefaultReducer
  }
}

export default connect(mapStateToProps)(DefaultPage);
