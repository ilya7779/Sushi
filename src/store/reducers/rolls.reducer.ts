import * as t from './../actions'
import {RollsActions} from "./../actions";



type RollsState = {
    hasBurger: boolean

}

const initialState: RollsState = {
    hasBurger: false,
};

export const rollsReducer = (state = initialState, action: RollsActions): RollsState => {
    switch (action.type) {
        case t.SET_ACTIVE_BURGER: {
            return { ...state, hasBurger: !state.hasBurger};
        }
        default:
            return state;
    }
};



