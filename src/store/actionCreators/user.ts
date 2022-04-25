import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
import { IUser } from '../../types/IUser';

export const login = (userData: IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.LOGIN });

    return new Promise<IUser>((res, rej) => {
      if (userData.email === 'test@test.test' && userData.password === 'test') {
        localStorage.setItem('user', JSON.stringify(userData));
        res(userData);

        dispatch({
          type: UserActionTypes.LOGIN_SUCCESS,
          payload: userData,
        });
      } else {
        rej('invalid login or password');
        dispatch({
          type: UserActionTypes.LOGIN_ERROR,
          payload: 'invalid password or email',
        });

        throw new Error('login error');
      }
    });
  };
};
