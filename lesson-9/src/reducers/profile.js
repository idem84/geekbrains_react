import {
  CHANGE_IS_ONLINE,
  CHANGE_NAME,
  SIGN_IN,
  SIGN_OUT,
} from "../actions/profile";

const initialState = {
  name: "Dmitriy",
  age: 37,
  isOnline: false,
  authed: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    case CHANGE_IS_ONLINE: {
      return {
        ...state,
        isOnline: action.payload.isOnline,
      };
    }
    case SIGN_IN:
      return {
        ...state,
        authed: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        authed: false,
      };
    default:
      return state;
  }
}
