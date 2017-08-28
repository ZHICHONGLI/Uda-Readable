import { combineReducers } from 'redux';
import DefaultReducer from './DefaultReducer';
import CategoryReducer from './CategoryReducer';

export default combineReducers({
  DefaultReducer,
  CategoryReducer
});