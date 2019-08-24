
import {USER__INFO} from '../actions/types';

const initialState = {
    info:''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case USER__INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}
