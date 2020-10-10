/* eslint-disable import/prefer-default-export */
import { UserActionTypes } from './userTypes';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
