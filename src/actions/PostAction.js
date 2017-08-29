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