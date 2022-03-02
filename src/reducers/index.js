// 여러 reducer 을 합쳐주는 과정 : root Reducer
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { addUserReducer } from "./addUserReducer";
import { isLoginReducer } from "./isLoginReducer";

const rootReducer = combineReducers({
  cartReducer,
  addUserReducer,
  isLoginReducer,
});

export default rootReducer;
