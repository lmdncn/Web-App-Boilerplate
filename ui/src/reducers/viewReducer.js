// Using redux-action

import {createReducer} from 'redux-action';
import {Titles} from "Utils/constants/Titles.js";

const initialState = {
    title: Titles.main,
    secondaryTitle: 'Welcome to ' + Titles.main + '!'
}

export const viewReducer = createReducer(initialState, {

    'SET_SECONDARY_TITLE': (payload, state, action) => {

        state.secondaryTitle = payload;
        return state;
    }

});