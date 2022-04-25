import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from '../../store/actionCreators/contacts';
import { AppDispatch, ContactsState } from '../../types/contactsReduser';
import { IContactInterface } from '../../types/IContact.interface';

export const Home = (): JSX.Element => {
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (state) => state.contacts
  );
  const [filteredContacts, setFilteredContacts] =
    useState<IContactInterface[]>(contacts);
  const dispatch: AppDispatch = useDispatch();

  const handleSetFilteredContacts = (filter: string) => {
    if (filter === '') {
      setFilteredContacts(contacts);
    } else {
      const newContacts = contacts.filter((contact) =>
        contact.fullName.includes(filter)
      );

      setFilteredContacts(newContacts);
    }

    console.log(filteredContacts, filter);
  };

  useEffect(() => {
    dispatch(fetchContacts());
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
