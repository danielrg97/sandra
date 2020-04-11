import { SET_USER, USER_IN_SESSION } from './constants';

export function setUser(values) {
    return{
        type: SET_USER, 
        user: values
    }
}
export function setUserInSession(values) {
  return {
    type: USER_IN_SESSION,
    user: values,
  };
}