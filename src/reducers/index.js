import { combineReducers } from "redux";
import usersReducer from "./users";

const appReducer = combineReducers({
    users: usersReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
