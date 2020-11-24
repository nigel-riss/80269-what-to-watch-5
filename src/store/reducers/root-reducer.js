import {combineReducers} from 'redux';
import {app} from './app/app.js';
import {data} from './data/data.js';


export const NameSpace = {
  APP: `APP`,
  DATA: `DATA`,
};


export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
});
