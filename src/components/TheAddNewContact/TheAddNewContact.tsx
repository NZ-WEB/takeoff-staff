import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Card, CardHeader, TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import CloseIcon from '@mui/icons-material/Close';
import { AppLayout } from '../../layout/AppLayout';
import { useState } from 'react';
import { AppDispatch, ContactsState } from '../../types/contactsReduser';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { IContactInterface } from '../../types/IContact.interface';
import { addContact } from '../../store/actionCreators/contacts';

export const TheAddNewContact = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (state) => state.contacts
  );
  const dispatch: AppDispatch = useDispatch();

  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const addNewContact = async (contact: IContactInterface) => {
    await dispatch(addContact(contact));
  };

  return (
    <>
      <IconButton onClick={handleIsOpened}>
        {isOpened ? <CloseIcon /> : <AddIcon />}
      </IconButton>

      {isOpened && (
        <Card variant="outlined" sx={{ padding: '1em' }}>
          <CardHeader title="Add new contact" />
          <form>
            <TextField margin="normal" fullWidth label="Full Name" />
            <TextField margin="normal" fullWidth label="Phone number" />
            <TextField margin="normal" fullWidth label="Avatar link" />
            <Button
              onClick={() => {
                addNewContact({
                  id: 1,
                  fullName: '1234',
                  phoneNumber: '1234',
                  avatar: '12',
                });
              }}
              color="primary"
              fullWidth
              variant="contained"
            >
              {' '}
              Add
            </Button>
          </form>
        </Card>
      )}
    </>
  );
};
