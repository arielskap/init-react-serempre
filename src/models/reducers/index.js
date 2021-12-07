import { combineReducers } from "redux";
import characterReducer from "./characterReducer";

const useReducers = () => {
	return combineReducers({
		characterReducer
	})
}

export default useReducers