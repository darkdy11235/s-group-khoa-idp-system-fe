// redux/reducers/authReducer.ts
import { LOGIN, LOGOUT } from '../../types/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
