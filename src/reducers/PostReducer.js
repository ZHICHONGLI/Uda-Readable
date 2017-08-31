const initialState = {
  currentPost: {},
  activeSortType: 'voteHigh'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST':
      return {
        ...state, currentPost: action.post
      }
    case 'SET_SORT_TYPE':
      return {
        ...state, activeSortType: action.sort
      }
    case 'VOTE_UP':
      return {
        ...state, currentPost: action.score
      }
    case 'VOTE_DOWN':
      return {
        ...state, currentPost: action.score
      }
    default :
      return state;
  }
};