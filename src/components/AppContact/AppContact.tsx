import { List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IContactInterface } from '../../types/IContact.interface';
import { AppDispatch, ContactsState } from '../../types/contactsReduser';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actionCreators/contacts';

export const AppContact = ({
  id,
  fullName,
  phoneNumber,
  avatar,
}: IContactInterface) => {
  const { contacts, error, loading }: ContactsState = useTypedSelector(
    (state) => state.contacts
  );
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = async () => {
    console.log(1);
    await dispatch(deleteContact(id));
  };

  return (
    <List>
      <ListItem>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6">#{id}</Typography>
          </Grid>
          <Grid item>
            <Avatar alt={fullName} src={avatar} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{fullName}</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ textAlign: 'right' }} variant="subtitle1">
              {phoneNumber}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete()}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};
