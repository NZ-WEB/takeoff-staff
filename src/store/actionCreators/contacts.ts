import {
  ContactActionTypes,
  ContactsAction,
} from '../../types/contactsReduser';
import { Dispatch } from 'redux';
import { IContactInterface } from '../../types/IContact.interface';

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactActionTypes.FETCH_CONTACTS });

      new Promise<IContactInterface[]>((res) => {
        const data = localStorage.getItem('contacts');

        if (data) {
          res(JSON.parse(data));
        } else {
          res([]);
        }
      }).then((r: IContactInterface[]) =>
        dispatch({
          type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: r,
        })
      );
    } catch (e) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};

export const addContact = (contact: IContactInterface) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ContactActionTypes.ADD_NEW_CONTACT });

    try {
      return new Promise<IContactInterface[]>((res) => {
        const data = localStorage.getItem('contacts');

        if (data) {
          const parsedData = JSON.parse(data);
          const newData = [...parsedData, contact];

          localStorage.setItem('contacts', JSON.stringify(newData));
          res(newData);
        } else {
          const newData = [contact];
          localStorage.setItem('contacts', JSON.stringify(newData));
          res(newData);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};
