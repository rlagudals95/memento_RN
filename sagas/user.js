import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  //LOG_OUT_SUCCESS,
  //LOG_OUT_FAILURE,
  //SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../reducers/user";

function loginAPI(data) {
  return axios.post(`/user/login`, data);
}

function* login(action) {
  // watchLogin의 LOG_IN_REQUEST에 대한 매개변수가 전달 됨
  try {
    const result = yield call(loginAPI, action.data); // loginAPI(action.data); 이런 것!
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post("user/logout");
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS, //data: result.data
    });
  } catch (err) {
    //yield put({ type: LOG_OUT_FAILURE, error: err.response.data });
  }
}

function signupAPI(data) {
  return axios.post(`/user`, data);
} // dispatch할 때 넘겨준 data === action

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    console.log("result", result);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err.response.data });
  }
}
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignUp)]);
}
