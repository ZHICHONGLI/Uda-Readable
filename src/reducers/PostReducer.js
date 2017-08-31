const initialState = {
  currentPost: {}
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
    default :
      return state;
  }
};