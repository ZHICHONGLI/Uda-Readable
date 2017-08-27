import * as API from '../apis/index';

export const fetchAllCats = () => {
  console.log('fet action');
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