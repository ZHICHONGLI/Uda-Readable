const initialState = {
  categories: [],
  allPosts: [],
  activeSortType: 'voteHigh'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CATS':
      return {
        ...state, categories: action.categories
      }
    case 'FETCH_ALL_POSTS':
      return {
        ...state, allPosts: action.posts
      }
    case 'SET_SORT_TYPE':
      return {
        ...state, activeSortType: action.sort
      }
    default :
      return state;
  }
};