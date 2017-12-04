import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import contentReducer from "./reducers/contentReducer";
import user from "./reducers/userReducer";
export default createStore(
    combineReducers({
        contentReducer,
        user
    }),
    {},
    applyMiddleware(logger)
);

// store.subscribe(() => {
//     console.log("store updated", store.getState());
// });

// export default store;
//
