const initialState = {
  currentPost: {},
  activeSortType: true,
  comments: [],
  inputComment: '',
  newPost: {
    id: '',
    timestamp: 0,
    title: '',
    body: '',
    owner: '',
    category: ''
  },
  delPostShow: false,
  delCmtShow: false,
  editCmtShow: false,
  editPostShow: false,
  editId: 0,
  delId: 0
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
    case 'INPUT_COMMENT':
      return {
        ...state, inputComment: action.input
      }
    case 'POST_COMMENT':
      const newComments = [action.newComment, ...state.comments]
      return {
        ...state, comments: newComments, inputComment: ''
      }
    case 'NEW_POST_CAT':
      state.newPost.category = action.category;
      return {...state}
    case 'NEW_POST_TITLE':
      state.newPost.title = action.title;
      return {...state}
    case 'NEW_POST_BODY':
      state.newPost.body = action.body;
      return {...state}
    case 'NEW_POST_OWNER':
      state.newPost.author = action.author;
      return {...state}
    case 'CLEAR_NEW_POST':
      state.newPost = initialState.newPost;
      return {...state}
    case 'DEL_POST_SHOW':
      state.delPostShow = true;
      return {...state}
    case 'DEL_POST_HIDE':
      state.delPostShow = false;
      return {...state}
    case 'DEL_CMT_SHOW':
      state.delCmtShow = true;
      state.delId = action.id;
      return {...state}
    case 'DEL_CMT_HIDE':
      state.delCmtShow = false;
      return {...state}
    case 'EDIT_CMT_SHOW':
      state.editCmtShow = true;
      state.editId = action.id;
      return {...state}
    case 'EDIT_CMT_HIDE':
      state.editCmtShow = false;
      state.inputComment = '';
      return {...state}       
    default :
      return state;
  }
};