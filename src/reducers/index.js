import { combineReducers } from "redux";
import changeNumber from "./incDcrement";

const rootReducer  = combineReducers({
    changeNumber:changeNumber
});

export default rootReducer;