import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Home = (): JSX.Element => {
  const { contacts, error, loading } = useTypedSelector((state) => state.contacts);
  console.log(contacts, loading );

  return (
    <AppLayout>
      <Container>
        <AppFilter />

        <AppContact />
        <AppContact />
        <AppContact />

        <TheAddNewContact />
      </Container>
    </AppLayout>
  );
};
