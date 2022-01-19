import { createAction, handleActions } from 'redux-actions';
import { produce } from "immer";

// 액션 타입을 정의해줍니다.
const SET_BIRTHDAY = 'SET_BIRTHDAY';

// 액션 생성 함수를 만듭니다.
const setBirthday = createAction(SET_BIRTHDAY);

// 초기 State를 정의합니다.
const initialState = {
  birthday: '1995-10-22'
}
// 미들웨어

// 리듀서 함수를 정의합니다.
export default handleActions({
    [SET_BIRTHDAY]: (state, action) =>
    produce(state, (draft) => {
      console.log('draft :', draft, 'action :', action.payload)
      draft.birthday = action.payload;
    }),
}, initialState);

const actionCreators = {
    setBirthday
}

export {actionCreators}