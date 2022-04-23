import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
export interface ContactsState {
  loading: boolean;
  error: null | string;
  contacts: any[];
}

export enum ContactActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
}

interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: any[];
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

export type AppDispatch = ThunkDispatch<ContactsState, any, AnyAction>;

export type ContactsAction =
  | FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction;
