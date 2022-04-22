import { IContactInterface } from './IContact.interface';
export interface ContactsState {
  loading: boolean;
  error: null | string;
  contacts: IContactInterface[];
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
  payload: IContactInterface[];
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERROR;
  payload: string | null;
}
export type ContactsActionType =
  | FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction;
