import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE,
} from "../actions/loremActions";

const initialState = {
  loading: true,
  posts: [],
};

function loremReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LOREM_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };

    case FETCH_LOREM_FAILURE:
      return {
        loading: false,
        posts: [],
      };

    default:
      return state;
  }
}

export default loremReducer;
