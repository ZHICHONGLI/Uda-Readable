const initialState = {
  categories: [],
  isFetching: false
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_ALL_CATS':
      console.log(action);
      return {
        ...state,
        categories: action.categories
      }
    case 'TEST':
      console.log('test');
      return state
    default :
      return state;
  }
};