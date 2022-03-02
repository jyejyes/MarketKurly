const initailState = 1;

export const addAction = () => {
  return {
    type: "ADD",
  };
};

export const minusAction = () => {
  return {
    type: "MINUS",
  };
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

export default cartReducer;
