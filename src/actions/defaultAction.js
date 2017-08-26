import * as CategoryAPI from '../apis/Category.API';

export const fetchAllCats = () => {
  console.log('fet action');
  return (dispatch) => {
    CategoryAPI.fetchCategories().then(res => {
      dispatch({
        type: 'FETCH_ALL_CATS',
        categories: res.categories
      });
    })
  }
}

// export const test = () => {
//   console.log('test action');
//   return dispatch => {
//     dispatch({
//       type: 'TEST'
//     })
//   }
//   // type: 'TEST'
// }

export function test () {
  console.log('test action')
  return {
    type: 'TEST'
  }
}