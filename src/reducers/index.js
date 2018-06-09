import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts:PostsReducer



  /* dummy reducer
  state: (state = {}) => state
  */
});

export default rootReducer;
