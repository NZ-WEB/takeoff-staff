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

        let payload;

        if (data) {
          const parsedData = JSON.parse(data);
          const newData = [
            ...parsedData,
            {
              ...contact,
              id: parsedData.length * Math.trunc(Math.random() * 104),
            },
          ];

          localStorage.setItem('contacts', JSON.stringify(newData));
          res(newData);
          payload = newData;
        } else {
          const newData = [{ ...contact, id: Math.trunc(Math.random() * 104) }];
          localStorage.setItem('contacts', JSON.stringify(newData));
          res(newData);
          payload = newData;
        }
        dispatch({ type: ContactActionTypes.ADD_NEW_CONTACT_SUCCESS, payload });
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: ContactActionTypes.ADD_NEW_CONTACT_ERROR,
        payload: 'adding new contact error',
      });
    }
  };
};

export const deleteContact = (id: number) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactActionTypes.DELETE_CONTACT });
      new Promise<IContactInterface[]>((res, rej) => {
        const data = localStorage.getItem('contacts');

        if (data) {
          const parsedData: IContactInterface[] = JSON.parse(data);

          const newData = parsedData.filter((contacts) => contacts.id !== id);

          res(newData);
          localStorage.setItem('contacts', JSON.stringify(newData));
          dispatch({
            type: ContactActionTypes.DELETE_CONTACT_SUCCESS,
            payload: newData,
          });
        } else {
          rej(new Error('local storage has not any contacts'));
        }
      });
    } catch (e) {
      console.log(e, 'delete contact error');
      dispatch({
        type: ContactActionTypes.DELETE_CONTACT_ERROR,
        payload: 'Delete contacts error',
      });
    }
  };
};

export const updateContact = (contact: IContactInterface) => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: ContactActionTypes.UPDATE_CONTACT });

    try {
      new Promise<IContactInterface[]>((res, rej) => {
        const data = localStorage.getItem('contacts');

        if (data) {
          const parsedData: IContactInterface[] = JSON.parse(data);

          const newContacts = parsedData.filter(
            (contactData) => contactData.id !== contact.id
          );

          newContacts.push(contact);

          localStorage.setItem('contacts', JSON.stringify(newContacts));
          dispatch({
            type: ContactActionTypes.UPDATE_CONTACT_SUCCESS,
            payload: newContacts,
          });

          res(newContacts);
        } else {
          rej(new Error('contacts was not fined in localStorage'));
        }
      });
    } catch (e) {
      dispatch({
        type: ContactActionTypes.UPDATE_CONTACT_ERROR,
        payload: 'Update contact error',
      });
    }
  };
};
