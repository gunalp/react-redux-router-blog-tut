import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

export default function(state = {},action){
  switch (action.type) {
    case FETCH_POSTS:
    return _.mapKeys(action.payload.data,'id');
      //console.log(action.payload.data);  //[post1,post2]
      // {4:post}
    default:
      return state;
  }
}
