
import {CHANGE__PHONE } from '../actions/types';

const initialState = {
    phone:''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE__PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state
    }
}
