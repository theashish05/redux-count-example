import { legacy_createStore as createStore } from "redux";
import rootReducers from "./rootReducers";

const store = createStore(rootReducers);

export default store;