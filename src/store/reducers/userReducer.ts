import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState = {
  user: null,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { user: null, error: null };
    case UserActionTypes.LOGIN_SUCCESS:
      return { user: action.payload, error: null };
    case UserActionTypes.LOGIN_ERROR:
      return { user: null, error: action.payload };
    default:
      return state;
  }
};
