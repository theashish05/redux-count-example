import { combineReducers } from "redux";

import countReducer from "./count/CountReducer";

const rootReducers = combineReducers({
    count: countReducer
});

export default rootReducers;
