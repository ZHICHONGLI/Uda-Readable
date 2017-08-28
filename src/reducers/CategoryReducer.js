const initialState = {
  catPosts: [],
  activeSortType: 'voteHigh'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAT_POSTS':
      return {
        ...state, catPosts: action.posts
      }
    case 'SET_SORT_TYPE':
      return {
        ...state, activeSortType: action.sort
      }
    default :
      return state;
  }
};