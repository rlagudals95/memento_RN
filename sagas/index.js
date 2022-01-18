import { all, fork, takeEvery, call } from "redux-saga/effects";
//import userSaga from "./user"; // saga에서 사용중인 api 요청 기본 url이 적용된다.
axios.defaults.baseURL = "http://localhost:3065"; // 서로 다른 도메인간 쿠키 전달 허용
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield console.log("hello world");
  // yield all([
  //   fork(userSaga),
  //   fork(postSaga),
  // ]);
}
