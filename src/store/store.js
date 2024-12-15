import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers";

export const store = createStore(rootReducer);

console.log('createStore store', store);
