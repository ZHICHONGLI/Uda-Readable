const initialState = {
  currentPost: {},
  activeSortType: true,
  comments: []
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
    case 'FETCH_COMMENTS':
      action.comments.sort((a, b)=>{
        if(a.voteScore > b.voteScore){
          return -1
        }else{
          return 1
        }
      });
      return {
        ...state, comments: action.comments
      }
    case 'VOTE_COMMENT_UP':
      let newC =state.comments.map(comment => {
        if (comment.id === action.score.id){
          comment = action.score;
          return comment
        }
        return comment
      })
      return {
        ...state, comments: newC
      }
    case 'VOTE_COMMENT_DOWN':
      newC =state.comments.map(comment => {
        if (comment.id === action.score.id){
          comment = action.score;
          return comment
        }
        return comment
      })
      return {
        ...state, comments: newC
      }
    case 'SORT_COMMENT_VOTE':
      state.comments.sort((a, b) => {
        if(a.voteScore> b.voteScore){
          return -1
        }else{
          return 1
        }
      }
      )
      return {
        ...state, activeSortType: true
      }
    case 'SORT_COMMENT_TIME':
      state.comments.sort((a, b) => {
        if(a.timestamp> b.timestamp){
          return -1
        }else{
          return 1
        }
      })
      return {
        ...state, activeSortType: false
      }
    default :
      return state;
  }
};