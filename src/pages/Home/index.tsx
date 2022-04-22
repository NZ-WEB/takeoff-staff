import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';
import { AppLayout } from '../../layout/AppLayout';

export const Home = (): JSX.Element => {
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
