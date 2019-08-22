
import {USER__ENTERED} from '../actions/types';

const initialState = {
    entered:''
}


export default function (state = initialState, action) {
    switch (action.type) {
        case USER__ENTERED:
            return {
                ...state,
                entered: action.payload
            }
        default:
            return state
    }
}
