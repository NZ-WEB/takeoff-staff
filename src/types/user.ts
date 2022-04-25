import { IUser } from './IUser';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export interface UserState {
  user: IUser | null;
  error: string | null;
}

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

interface LoginAction {
  type: UserActionTypes.LOGIN;
}
interface LoginActionSuccess {
  type: UserActionTypes.LOGIN_SUCCESS;
  payload: IUser;
}
interface LoginActionError {
  type: UserActionTypes.LOGIN_ERROR;
  payload: string;
}

export type UserDispatch = ThunkDispatch<UserState, any, AnyAction>;

export type UserAction = LoginAction | LoginActionSuccess | LoginActionError;
