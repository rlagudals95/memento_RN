import { createAction, handleActions } from 'redux-actions';
import { produce } from "immer";

// 액션 타입을 정의해줍니다.
const GET_FEEDS = 'steem/getFeeds';
const PUSH_FEEDS = 'PUSH_FEEDS'

// 액션 생성 함수를 만듭니다.
const getFeeds = createAction(GET_FEEDS);
const pushFeeds = createAction(PUSH_FEEDS);

// 초기 State를 정의합니다.
const initialState = {
  feeds: []
}
// 미들웨어

const fetchFeeds = (tag) => {
    const data = {
        id: 1,
        jsonrpc: "2.0",
        method: "call",
        params: [
            "database_api",
            "get_discussions_by_created",
            [
                {
                    tag: tag,
                    limit: 10,
                }
            ]
        ]
    };
    return (dispatch, state) => {
      return fetch('https://api.steemit.com',
      {
          method: 'POST',
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        dispatch(getFeeds(res.result))
      })
      .catch(error => {
        console.error('ERROR', error); 
      });
    };
  }


// 리듀서 함수를 정의합니다.
export default handleActions({
  [GET_FEEDS]: (state, action) => {
    state = {
      ...state,
      feeds: [
        ...state.feeds,
        ...action.payload
      ]
    }
    return state;
  },
  [PUSH_FEEDS]: (state, action) =>
    produce(state, (draft) => {
      console.log('draft :', draft, 'action :', action.payload)
      draft.feeds = action.payload;
  }),
}, initialState);

const actionCreators = {
    fetchFeeds,
    pushFeeds
}

export {actionCreators}