import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Card, CardHeader, TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import {AppLayout} from "../../layout/AppLayout";

export const TheAddNewContact = (): JSX.Element => {
  return (
    <AppLayout>
      <IconButton>
        <AddIcon />
      </IconButton>

      <Card variant="outlined" sx={{ padding: '1em' }}>
        <CardHeader title="Add new contact" />
        <form>
          <TextField margin="normal" fullWidth label="Full Name" />
          <TextField margin="normal" fullWidth label="Phone number" />
          <TextField margin="normal" fullWidth label="Avatar link" />
          <Button color="primary" fullWidth variant="contained">
            {' '}
            Add
          </Button>
        </form>
      </Card>
    </AppLayout>
  );
};
