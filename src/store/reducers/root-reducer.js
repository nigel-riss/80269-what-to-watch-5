import {combineReducers} from 'redux';
import {app} from './app/app.js';
import {data} from './data/data.js';
import {user} from './user/user.js';


export const NameSpace = {
  APP: `APP`,
  DATA: `DATA`,
  USER: `USER`,
};


export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
