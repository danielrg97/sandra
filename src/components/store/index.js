import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import LoginReducer from './../login/reducer';

const reducers = combineReducers({
  loginReducer: LoginReducer,
  routing: routerReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
