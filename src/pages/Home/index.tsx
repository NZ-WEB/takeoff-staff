import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../store/actionCreators/contacts';
import { AppDispatch } from '../../types/contactsReduser';

export const Home = (): JSX.Element => {
  const { contacts, error, loading } = useTypedSelector(
    (state) => state.contacts
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()).then((r) => console.log(r, 'result'));
  }, []);

  return (
    <AppLayout>
      <Container>
        {error && <h4>error</h4>}

        <AppFilter />

        <AppContact />
        <AppContact />
        <AppContact />

        <TheAddNewContact />
      </Container>
    </AppLayout>
  );
};
