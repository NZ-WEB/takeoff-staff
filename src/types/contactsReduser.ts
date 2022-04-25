import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
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
  ADD_NEW_CONTACT = 'ADD_NEW_CONTACT',
  ADD_NEW_CONTACT_SUCCESS = 'ADD_NEW_CONTACT_SUCCESS',
  ADD_NEW_CONTACT_ERROR = 'ADD_NEW_CONTACT_ERROR',
  DELETE_CONTACT = 'DELETE_CONTACT',
  DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  UPDATE_CONTACT = ' UPDATE_CONTACT',
  UPDATE_CONTACT_ERROR = ' UPDATE_CONTACT_ERROR',
  UPDATE_CONTACT_SUCCESS = ' UPDATE_CONTACT_SUCCESS',
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
  payload: string;
}

interface AddNewContactAction {
  type: ContactActionTypes.ADD_NEW_CONTACT;
}

interface AddNewContactSuccess {
  type: ContactActionTypes.ADD_NEW_CONTACT_SUCCESS;
  payload: IContactInterface[];
}
interface AddNewContactError {
  type: ContactActionTypes.ADD_NEW_CONTACT_ERROR;
  payload: string;
}

interface DeleteContact {
  type: ContactActionTypes.DELETE_CONTACT;
}

interface DeleteContactSuccess {
  type: ContactActionTypes.DELETE_CONTACT_SUCCESS;
  payload: IContactInterface[];
}
interface DeleteContactError {
  type: ContactActionTypes.DELETE_CONTACT_ERROR;
  payload: string;
}

interface UpdateContact {
  type: ContactActionTypes.UPDATE_CONTACT;
}

interface UpdateContactSuccess {
  type: ContactActionTypes.UPDATE_CONTACT_SUCCESS;
  payload: IContactInterface[];
}

interface UpdateContactError {
  type: ContactActionTypes.UPDATE_CONTACT_ERROR;
  payload: string;
}

export type ContactsDispatch = ThunkDispatch<ContactsState, any, AnyAction>;

export type ContactsAction =
  | FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction
  | AddNewContactAction
  | AddNewContactSuccess
  | AddNewContactError
  | DeleteContact
  | DeleteContactSuccess
  | DeleteContactError
  | UpdateContact
  | UpdateContactSuccess
  | UpdateContactError;
