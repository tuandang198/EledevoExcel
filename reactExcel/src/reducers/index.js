import { combineReducers } from "redux";
import studentReducer from '../reducers/studentReducer'
export default combineReducers({
	studentReducer: studentReducer
})