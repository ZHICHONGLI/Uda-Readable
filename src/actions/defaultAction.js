import * as API from '../apis/index';

export const fetchAllCats = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({
        type: 'FETCH_ALL_CATS',
        categories: res.categories
      });
    })
  }
}

export const fetchAllPosts = () => {
  return dispatch => {
    API.fetchAllPosts().then(res => {
      res.sort((a, b) => {
        if(a.voteScore > b.voteScore) {
          return -1
        } else {
          return 1
        }
      })
      dispatch({
        type: 'FETCH_ALL_POSTS',
        posts: res
      })
    })
  }
}

export const setSortType = (e) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SORT_TYPE',
      sort: e
    })
  }
}