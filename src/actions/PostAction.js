import * as API from '../apis/index';

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
        post: res
      });
    })
  }
}

export const voteDown = (id) => {
  return (dispatch) => {
    API.voteDown(id).then(res => {
      console.log(res);
      dispatch({
        type: 'VOTE_DOWN',
        post: res
      });
    })
  }
}