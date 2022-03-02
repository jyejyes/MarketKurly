//1. 액션 타입 만들기
const ADD_USER = "addUserReducer/ADD_USER";
let userNum = 0; //유저개수

//2. 액션 생성함수 만들기
export const addUser = (idtext, pwtext) => ({
  type: ADD_USER,
  add: {
    totalUser: ++userNum,
    idtext,
    pwtext,
  },
});

const initailState = [];

export const addUserReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(action.add);
    default:
      return state;
  }
};
