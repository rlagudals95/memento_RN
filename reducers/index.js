import { combineReducers } from 'redux';
import steem from './steem';
import user from './user'

export default combineReducers({
  steem,
  user
});