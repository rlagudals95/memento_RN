// import produce from "immer";

// export const initialState = {
//   logInLoading: false, // 로그인 시도중
//   logInDone: false,
//   logInError: null,
//   me: null,
//   userInfo: null,
// };

// export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
// export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
// export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
// export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
// export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
// export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
// export const loginRequestAction = (data) => {
//   return { type: LOG_IN_REQUEST, data };
// };

// const reducer = (state = initialState, action) => {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case LOG_IN_REQUEST:
//         draft.loginLodding = true;
//         draft.loginError = null;
//         draft.loginDone = false;
//         break;
//       case LOG_IN_SUCCESS:
//         draft.loginLodding = false;
//         draft.loginDone = true;
//         draft.me = action.data;
//         break;
//       case LOG_IN_FAILURE:
//         draft.loginLodding = false;
//         draft.loginError = action.error;
//         break;
//       default:
//         break;
//     }
//   });
// };

// export default reducer;
