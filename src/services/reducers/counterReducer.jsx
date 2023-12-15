import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstant";

//state
const initialCounterState = {
  count: 0,
};
//reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      } else {
        // Handle the case when count is already at zero
        return state;
      }

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
export default counterReducer;
