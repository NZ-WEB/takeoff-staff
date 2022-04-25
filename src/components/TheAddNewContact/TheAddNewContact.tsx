import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Card, CardHeader, TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import CloseIcon from '@mui/icons-material/Close';
import { AppLayout } from '../../layout/AppLayout';
import { useState } from 'react';
import { ContactsDispatch, ContactsState } from '../../types/contactsReduser';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { IContactInterface } from '../../types/IContact.interface';
import { addContact } from '../../store/actionCreators/contacts';
import { SubmitHandler, useForm } from 'react-hook-form';

export const TheAddNewContact = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactInterface>();
  const dispatch: ContactsDispatch = useDispatch();

  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const onSubmit: SubmitHandler<IContactInterface> = (data) => {
    addNewContact(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              error={!!errors.fullName}
              margin="normal"
              fullWidth
              label="Full Name"
              helperText={errors.fullName ? 'This field is required!' : ''}
              {...register('fullName', { required: true })}
            />
            <TextField
              required
              error={!!errors.phoneNumber}
              helperText={
                errors.phoneNumber
                  ? 'This field is required and must be number!'
                  : ''
              }
              margin="normal"
              fullWidth
              label="Phone number"
              {...register('phoneNumber', { required: true, pattern: /^\d+$/ })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Avatar link"
              {...register('avatar', { required: false })}
            />
            <Button type="submit" color="primary" fullWidth variant="contained">
              Add
            </Button>
          </form>
        </Card>
      )}
    </>
  );
};
