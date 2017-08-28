import * as API from '../apis/index';

export const fetchCatPosts = (cat) => {
  return dispatch => {
    API.fetchCatPosts(cat).then(res => {
      res.sort((a, b) => {
        if(a.voteScore > b.voteScore) {
          return -1
        } else {
          return 1
        }
      })
      dispatch({
        type: 'FETCH_CAT_POSTS',
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