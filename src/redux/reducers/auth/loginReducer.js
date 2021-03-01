import { types } from "../../actions/types";

const initialState = {
  message: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_CLICKED:
      return {
        ...state,
        isLoading: true,
        email: action.payload,
        message: null,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.msg,
        isLoading: false,
        isLogedIn: true,
      };

    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLogedIn: false,
      };
    case types.REMOVE_LOGIN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
