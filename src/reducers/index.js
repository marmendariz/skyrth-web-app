import {combineReducers} from 'redux';
import authReducer from './authReducer';


//auth state is being manufactured by the authReducer
export default combineReducers({
  auth: authReducer
});