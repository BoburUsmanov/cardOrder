
import {SAVE__PHONE } from '../actions/types';

const initialState = {
    number:''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE__PHONE:
            return {
                ...state,
                number: action.payload
            }
        default:
            return state
    }
}
