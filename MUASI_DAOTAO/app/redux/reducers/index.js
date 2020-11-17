import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import PurchaseReducer from './PurchaseReducer'
import { RESET } from "../actions/type";


appReducer = combineReducers({
  userReducer: UserReducer,
  purchaseReducer: PurchaseReducer
});

const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
