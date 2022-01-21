import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { customAxios } from "../config/customAxios";
import axios from 'axios';

// 액션 타입을 정의해줍니다.
const SET_BIRTHDAY = "SET_BIRTHDAY";
const SET_USER_INFO = "SET_USER_INFO";

// 액션 생성 함수를 만듭니다.
const setBirthday = createAction(SET_BIRTHDAY);
const setUserInfo = createAction(SET_USER_INFO);

// 초기 State를 정의합니다.
const initialState = {
  birthday: 1,
  user_info : "userInfo.. loading...",
};
// 미들웨어
const getBirthday = (username) => {
  return function (dispatch) {
    const reqDto = {username}
    customAxios.post("/getBirthday", reqDto)
    .then((res) => {
      dispatch(setBirthday(res.data.birthday))
    }).catch((err)=> {
      console.log('생일 가져오기 실패 :',err);
    });
  };
};

const getUserInfo = () => {
  return async function (dispatch, getState, { history }) {
      let authCode = window.location.href.split("code=")[1]
        ? window.location.href.split("code=")[1]
        : "";
      let reqDto = {
        code: authCode,
      };
      if (authCode) {
        const res = await customAxios.post("/login/oauth_kakao", reqDto)
          
        console.log("카카오 로그인 res : ", res);
        localStorage.setItem(
          "Authorization",
          "Barear" + " " + res.data.accessToken
        );

        axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization");
        localStorage.setItem("username", res.data.id);
        localStorage.setItem("nickname", res.data.nickname);
       
        setTimeout(()=> {
          dispatch(getBirthday(localStorage.getItem("username")))
        },1000)
        history.push("/");
        
      } else {
        dispatch(getBirthday(localStorage.getItem("username")))
      }
  };
};

// 리듀서 함수를 정의합니다.
export default handleActions(
  {
    [SET_BIRTHDAY]: (state, action) =>
      produce(state, (draft) => {
        draft.birthday = action.payload;
    }),
    [SET_USER_INFO]: (state, action) =>
      produce(state, (draft) => { 
        draft.user_info = action.payload;
    }),
  },
  initialState
);

const actionCreators = {
  getBirthday,
  setBirthday,
  getUserInfo,
  setUserInfo
};

export { actionCreators };
