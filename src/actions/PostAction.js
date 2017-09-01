import * as API from '../apis/index';
import uuidv4 from 'uuid/v4';

export const fetchPost = (id) => {
  return (dispatch) => {
    API.fetchPost(id).then(res => {
      dispatch({
        type: 'FETCH_POST',
        post: res
      });
    })
  }
}

export const voteUp = (id) => {
  return (dispatch) => {
    API.voteUp(id).then(res => {
      console.log(res);
      dispatch({
        type: 'VOTE_UP',
        score: res
      });
    })
  }
}

export const voteDown = (id) => {
  return (dispatch) => {
    API.voteDown(id).then(res => {
      dispatch({
        type: 'VOTE_DOWN',
        score: res
      });
    })
  }
}

export const fetchPostComments = (id) => {
  return (dispatch) => {
    API.fetchPostComments(id).then(res => {
      dispatch({
        type: 'FETCH_COMMENTS',
        comments: res
      });
    })
  }
}

export const voteCommentUp = (id) => {
  return (dispatch) => {
    API.voteCommentUp(id).then(res => {
      dispatch({
        type: 'VOTE_COMMENT_UP',
        score: res
      });
    })
  }
}

export const voteCommentDown = (id) => {
  return (dispatch) => {
    API.voteCommentDown(id).then(res => {
      dispatch({
        type: 'VOTE_COMMENT_DOWN',
        score: res
      });
    })
  }
}

export const sortCommentVote = () => {
  return (dispatch) => {
    dispatch({
      type: 'SORT_COMMENT_VOTE'
    })
  }
}

export const sortCommentTime = () => {
  return (dispatch) => {
    dispatch({
      type: 'SORT_COMMENT_TIME'
    })
  }
}

export const inputComment = (e) => {
  return (dispatch) => {
    dispatch({
      type: 'INPUT_COMMENT',
      input: e.target.value
    })
  }
}

export const postComment = () => {
  let newComment = {};
  return (dispatch, state) => {
    newComment.body = state().PostReducer.inputComment;
    newComment.parentId = state().PostReducer.currentPost.id;
    newComment.timestamp = Date.now();
    newComment.author = 'Default Author';
    newComment.id = uuidv4();
    API.postComment(newComment).then(res => {
      console.log(res)
      dispatch({
        type: 'POST_COMMENT',
        newComment: res
      })
    })
  }
}