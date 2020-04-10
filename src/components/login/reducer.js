import Immutable from 'immutable';
import {SET_USER} from './constants';

const initialState = Immutable.Map({
    users:{}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return state.withMutations( map => {
                map.set("users", action.user);
            });
        default:
            return initialState;
    }
}