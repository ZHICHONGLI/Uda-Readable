import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DefaultAction from '../actions/DefaultAction';
import * as CategoryAction from '../actions/CategoryAction';
import CategoryList from '../components/CategoryList';
import PostsList from '../components/PostsList';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.DefaultAction = bindActionCreators(DefaultAction, props.dispatch);
    this.CategoryAction = bindActionCreators(CategoryAction, props.dispatch);
  }
  componentWillMount() {
    document.title = 'Category';
  }
  componentDidMount() {
    this.DefaultAction.fetchAllCats();
    if(this.props.match.params){
      const {cat} = this.props.match.params;
      this.CategoryAction.fetchCatPosts(cat);
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.match.params !== this.props.match.params) {
      const nextCat = nextProps.match.params.cat;
      this.CategoryAction.fetchCatPosts(nextCat);
    }
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
    const {categories} = this.props.DefaultReducer;
    const {cat} = this.props.match.params;
    const {catPosts, activeSortType} = this.props.CategoryReducer;
    const qty = catPosts.length;
    const handleSortPosts = (e) => {
      this.CategoryAction.setSortType(e);
      this.sortPosts(e, catPosts);
    }
  
    return (
      <div className='row page-container'>
        <div className='row'>
          <CategoryList
            categories={categories}
          />
        </div>
        { cat ? <div>
          <div className='row'>
            <h3 className='cat-header'>{cat.toUpperCase()}</h3>
          </div>
          <div className='row'>
            <span className='col-sm-2'>{qty} of {qty > 1 ?'Posts': 'Post'} of {cat}</span>
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
              posts={catPosts}
            />
          </div>
        </div> :
          <h3>Please Select a Category</h3>
        }
      </div>
    );
  }
}

function mapStateRoProps (state) {
  return {
    DefaultReducer: state.DefaultReducer,
    CategoryReducer: state.CategoryReducer
  }
}

export default connect(mapStateRoProps)(CategoryPage);
