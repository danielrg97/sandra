import Immutable from 'immutable';
import {SET_USER, USER_IN_SESSION} from './constants';

const initialState = Immutable.Map({
    users:[],
    userInSession:{}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return state.setIn(['users'],
              [...state.get('users'), action.user]
            );
        case USER_IN_SESSION:
            return state.withMutations(map => {
                map.set("userInSession", action.user);
            })
        default:
            return initialState;
    }
}