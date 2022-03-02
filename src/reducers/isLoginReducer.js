const IS_LOGIN = "addUserReducer/IS_LOGIN";

export const isLogin = (loginState) => ({
  type: IS_LOGIN,
  loginState: loginState, //객체 상태로 넣어줘야해서 " ": " "
});

const initailState = {
  loginState: false,
};

export const isLoginReducer = (state = initailState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        loginState: action.loginState,
      };

    default:
      return state;
  }
};
