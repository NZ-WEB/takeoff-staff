import {
  ContactActionTypes,
  ContactsAction,
  ContactsState,
} from '../../types/contactsReduser';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

export const contactsReducer = (
  state: ContactsState = initialState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS:
      return { loading: true, error: null, contacts: [] };
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return { loading: false, error: null, contacts: action.payload };
    case ContactActionTypes.FETCH_CONTACTS_ERROR:
      return { loading: false, error: action.payload, contacts: [] };
    default:
      return state;
  }
};
