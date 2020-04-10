import { SET_USER } from './constants';

export function setUser(values) {
    return{
        type: SET_USER, 
        user: values
    }
}