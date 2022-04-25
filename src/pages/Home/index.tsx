import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from '../../store/actionCreators/contacts';
import { ContactsDispatch, ContactsState } from '../../types/contactsReduser';
import { IContactInterface } from '../../types/IContact.interface';
import { UserState } from '../../types/user';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/IUser';

export const Home = (): JSX.Element => {
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (state) => state.contacts
  );

  const { user } = useTypedSelector((state) => state.user);
  const [filteredContacts, setFilteredContacts] =
    useState<IContactInterface[]>(contacts);
  const dispatch: ContactsDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetFilteredContacts = (filter: string) => {
    if (filter === '') {
      setFilteredContacts(contacts);
    } else {
      const newContacts = contacts.filter((contact) =>
        contact.fullName.includes(filter)
      );

      setFilteredContacts(newContacts);
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());

    if (!user && !localStorage.getItem('user')) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <AppLayout>
      <Container>
        {error && <h4>error</h4>}

        {loading && <h2>loading</h2>}

        <AppFilter filterContacts={handleSetFilteredContacts} />

        {filteredContacts.map((contact) => (
          <AppContact
            key={contact.id}
            id={contact.id}
            fullName={contact.fullName}
            phoneNumber={contact.phoneNumber}
            avatar={contact.avatar}
          />
        ))}

        <TheAddNewContact />
      </Container>
    </AppLayout>
  );
};
