import * as types from '../constant'
import * as actions from '../actions/index'
import { put, takeEvery } from 'redux-saga/effects'
import getAPI from '../fetchAPI/getItems'
import addAPI from '../fetchAPI/addAPI'
import updateAPI from '../fetchAPI/updateAPI'
import deleteAPI from '../fetchAPI/deleteAPI'
import importAPI from '../fetchAPI/importAPI'

function* getStudent(action) {
	try {
		const res = yield getAPI(action.payload)
		yield put(actions.getStudentSuccess(res))
	} catch (error) {
		yield put(actions.getStudentFailure(error))
	}
}

function* addStudent(action) {
	try {
		yield addAPI(action.payload)
		yield put(actions.addStudentSuccess())
		yield put(actions.getStudentRequest({ activePage: 1 }))
	} catch (error) {
		yield put(actions.addStudentFailure(error))
	}
}

function* deleteStudent(action) {
	try {
		yield deleteAPI(action.payload)
		yield put(actions.deleteStudentSuccess())
		yield put(actions.getStudentRequest({ activePage: 1 }))
	} catch (error) {
		yield put(actions.deleteStudentFailure(error))
	}
}

function* updateStudent(action) {
	try {
		yield updateAPI(action.payload)
		yield put(actions.updateStudentSuccess())
		yield put(actions.getStudentRequest({ activePage: 1 }))
	} catch (error) {
		yield put(actions.updateStudentFailure(error))
	}
}

function* importStudent(action) {
	try {
		yield importAPI(action.payload)
		yield put(actions.importStudentSuccess())
		yield put(actions.getStudentRequest({ activePage: 1 }))
	} catch (error) {
		yield put(actions.importStudentFailure(error))
	}
}
export const studentSaga = [
	takeEvery(types.GET_STUDENT_REQUEST, getStudent),
	takeEvery(types.ADD_STUDENT_REQUEST, addStudent),
	takeEvery(types.DELETE_STUDENT_REQUEST, deleteStudent),
	takeEvery(types.UPDATE_STUDENT_REQUEST, updateStudent),
	takeEvery(types.IMPORT_STUDENT_REQUEST, importStudent)
]