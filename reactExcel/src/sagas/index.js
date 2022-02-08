import { all } from 'redux-saga/effects';
import {studentSaga} from '../sagas/studentSaga'
function* rootSaga() {
  yield all([
	  ...studentSaga
  ]);
}

export default rootSaga