import { actionType } from "../actions";
import { initState } from "../store";

type Action = {
    type: string;
}

export const counter = (state = initState, action: Action) => {
    switch (action.type) {
        case actionType.INCREASE:
            return {
                ...state,
                count: state.count + 1
            };
        case actionType.DECREASE:
            return {
                ...state,
                count: state.count - 1
            };
        case actionType.RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};