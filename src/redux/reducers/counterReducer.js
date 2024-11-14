const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
    console.log('action: ', action);
  switch (action.type) {
    case "INCREMENT":
      if (state.count < 100) {
        return {
          ...state,
          count: state.count + 1,
        };
      }
      return state;
    case "DECREMENT":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      return state;
    case "SETCOUNT":
      if (action.payload >= 0 && action.payload <= 100) {
        return {
          ...state,
          count: action.payload,
        };
      }
      return state;
    default:
      return state;
  }
};

export default counterReducer;
