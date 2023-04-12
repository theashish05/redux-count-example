import { INCREMENT, DECREMENT, RESET } from "./CountType";

export const increment = (data = 1) => {
    return {
        type: INCREMENT,
        payload: data
    };
};
export const decrement = (data = 1) => {
    return {
        type: DECREMENT,
        payload: data
    };
};
export const reset = (data = 0) => {
    return {
        type: RESET,
        payload: data
    };
};