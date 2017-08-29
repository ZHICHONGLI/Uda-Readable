import { combineReducers } from 'redux';
import DefaultReducer from './DefaultReducer';
import CategoryReducer from './CategoryReducer';
import PostReducer from './PostReducer';

export default combineReducers({
  DefaultReducer,
  CategoryReducer,
  PostReducer
});