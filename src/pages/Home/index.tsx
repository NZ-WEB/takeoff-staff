import { Container } from '@mui/material';
import { AppContact, AppFilter } from '../../components';
import { TheAddNewContact } from '../../components/TheAddNewContact/TheAddNewContact';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <AppFilter />

      <AppContact />
      <AppContact />
      <AppContact />

      <TheAddNewContact />
    </Container>
  );
};
