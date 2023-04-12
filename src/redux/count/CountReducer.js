import { INCREMENT, DECREMENT, RESET } from "./CountType";

const initialState = {
    noOfCount: 5
};

function countReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                noOfCount: state.noOfCount + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                noOfCount: state.noOfCount - action.payload
            };
        case RESET:
            return initialState
        default:
            return state;
    }
}
export default countReducer;