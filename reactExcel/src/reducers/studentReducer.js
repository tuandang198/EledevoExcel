/* eslint-disable import/no-anonymous-default-export */
import * as types from '../constant'

const initialState = {
	listStudent: [],
	isFetching: false,
	dataFetched: false,
	error: false,
	errorMessage: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case types.GET_STUDENT_REQUEST:
		case types.ADD_STUDENT_REQUEST:
		case types.DELETE_STUDENT_REQUEST:
		case types.UPDATE_STUDENT_REQUEST:
		case types.IMPORT_STUDENT_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case types.GET_STUDENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
				listStudent: payload.studentData,
				totalRecords: payload.totalRecords,
				totalPage: payload.totalPage,
				activePage: payload.activePage
			}
		case types.ADD_STUDENT_SUCCESS:
		case types.DELETE_STUDENT_SUCCESS:
		case types.UPDATE_STUDENT_SUCCESS:
		case types.IMPORT_STUDENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
			}
		case types.GET_STUDENT_FAILURE:
		case types.ADD_STUDENT_FAILURE:
		case types.DELETE_STUDENT_FAILURE:
		case types.UPDATE_STUDENT_FAILURE:
		case types.IMPORT_STUDENT_FAILURE:
			return {
				...state,
				isFetching: false,
				dataFetched: false,
				error: true,
				errorMessage: payload.errorMessage
			}
		default:
			return state
	}
}
