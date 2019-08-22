
import {GET__CODE } from '../actions/types';

const initialState = {
    code:''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET__CODE:
            return {
                ...state,
                code: action.payload
            }
        default:
            return state
    }
}
