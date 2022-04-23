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
          res([
            {
              id: 1,
              fullName: 'first',
              phoneNumber: '891052141',
              avatar: 'awfawfaw',
            },
            {
              id: 2,
              fullName: 'second',
              phoneNumber: '891052141',
              avatar: 'awfawfaw',
            },
          ]);
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
