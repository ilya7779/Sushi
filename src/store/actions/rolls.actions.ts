
import * as t from './actions.types'

export const setActiveBurgerAC = () => {
    return {type: t.SET_ACTIVE_BURGER} as const;
};


type setActiveBurgerAction = ReturnType<typeof setActiveBurgerAC>;

export type RollsActions = setActiveBurgerAction ;

