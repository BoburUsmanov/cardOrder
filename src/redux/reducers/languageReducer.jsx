import {CHANGE__LANGUAGE } from '../actions/types';

const initialState = {
    lang:'ru'
}


export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE__LANGUAGE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state
    }
}