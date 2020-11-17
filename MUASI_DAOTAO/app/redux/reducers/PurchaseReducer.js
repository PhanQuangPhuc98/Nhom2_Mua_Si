import { GET_PUCHASE, GET_PUCHASE_SUCCESS, GET_PUCHASE_FAIL } from "../actions/type";

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PUCHASE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PUCHASE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case GET_PUCHASE_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload.error
      };
    default:
      break;
  }
  return state;
}
