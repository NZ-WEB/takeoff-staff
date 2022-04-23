import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/actionCreators/contacts';
import { AppDispatch, ContactsState } from '../../types/contactsReduser';

export const Home = (): JSX.Element => {
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (state) => state.contacts
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <AppLayout>
      <Container>
        {error && <h4>error</h4>}

        {loading && <h2>loading</h2>}

        <AppFilter />

        {contacts.map((contact) => (
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
