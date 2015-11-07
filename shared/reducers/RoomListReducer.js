/**
 * Created by youngmoon on 11/7/15.
 */

import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function RoomListReducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_ROOLIST':
            console.log('get room list recucer => ', action);
            return state.concat(acrtion.res.data);
        default:
            return state;
    }
}