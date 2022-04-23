import {
  ContactsAction,
  ContactActionTypes,
} from '../../types/contactsReduser';
import { Dispatch } from 'redux';

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactActionTypes.FETCH_CONTACTS });
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: [
            { id: 1, fullName: '123', phoneNumber: '123', avatar: '123' },
          ],
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
