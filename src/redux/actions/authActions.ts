// redux/actions/authActions.ts
import { LOGIN, LOGOUT } from '../../types/actionTypes';

export const login = (userData: any) => ({
  type: LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});
