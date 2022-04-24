import { List, ListItem, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IContactInterface } from '../../types/IContact.interface';
import { AppDispatch } from '../../types/contactsReduser';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actionCreators/contacts';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateContact as ACUpdateContact } from '../../store/actionCreators/contacts';

export const AppContact = ({
  id,
  fullName,
  phoneNumber,
  avatar,
}: IContactInterface) => {
  const [isEdit, setIsEdit] = useState<boolean>();
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactInterface>();

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit: SubmitHandler<IContactInterface> = (data) => {
    updateContact(data);
  };

  const updateContact = async (data: IContactInterface) => {
    data.id = id;
    console.log(data, 'data');
    await dispatch(ACUpdateContact(data));
  };

  const handleDelete = async () => {
    await dispatch(deleteContact(id));
  };

  return (
    <List>
      <ListItem>
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">#{id}</Typography>
            </Grid>
            <Grid item>
              {isEdit ? (
                <TextField
                  margin="normal"
                  defaultValue={avatar}
                  label="Avatar link"
                  {...register('avatar', { required: false })}
                />
              ) : (
                <Avatar alt={fullName} src={avatar} />
              )}
            </Grid>
            <Grid item xs={3}>
              {isEdit ? (
                <TextField
                  required
                  error={!!errors.fullName}
                  margin="normal"
                  label="Full Name"
                  defaultValue={fullName}
                  helperText={errors.fullName ? 'This field is required!' : ''}
                  {...register('fullName', { required: true })}
                />
              ) : (
                <Typography variant="h6">{fullName}</Typography>
              )}
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: 'right' }} variant="subtitle1">
                {isEdit ? (
                  <TextField
                    required
                    error={!!errors.phoneNumber}
                    helperText={
                      errors.phoneNumber ? 'This field is required!' : ''
                    }
                    defaultValue={phoneNumber}
                    margin="normal"
                    label="Phone number"
                    {...register('phoneNumber', { required: true })}
                  />
                ) : (
                  <b>{phoneNumber}</b>
                )}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton type="submit" onClick={() => handleIsEdit()}>
                {isEdit ? <CheckIcon /> : <EditIcon />}
              </IconButton>
              <IconButton onClick={() => handleDelete()}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </form>
      </ListItem>
    </List>
  );
};
